import React, { createContext, useState } from "react";
import _ from "lodash";
import AlertMessagesComponent from "./components/AlertMessages";
import { TYPE_SUCCESS, TYPE_FAILED, TYPE_IN_PROGRESS } from "./const";

export const AlertMessagesContext = createContext({
  postAlertMessage: (message) => {}
});

export default function AlertMessagesProvider({ children }) {
  const [alertMessages, setAlertMessages] = useState([]);

  const postAlertMessage = (message) => {
    message.key = message.key ?? `alert-${Date.now()}`;

    setAlertMessages((messages) => {
      const updatedMessages = _checkForPendingMessage(messages, message);
      if (updatedMessages) {
        return _.cloneDeep(updatedMessages);
      }

      message.clearMessageTimeoutReference = _createClearMessageJob(message);
      return [..._clearAlertMessageWithKey(messages, message.key), message];
    });
  };

  const clearAlertMessage = (messageKey) => {
    setAlertMessages((messages) =>
      _clearAlertMessageWithKey(messages, messageKey)
    );
  };

  const _checkForPendingMessage = (messages, message) => {
    const existingMessage = messages.filter(
      (msg) => msg.key === message.key
    )[0];

    if (_isIndefiniteInProgressAlert(message)) {
      if (_doesExistingAlertIsInProgress(existingMessage)) {
        existingMessage._pendingRequests =
          (existingMessage._pendingRequests ?? 0) + 1;
        return messages;
      }

      message._pendingRequests = 1;
      return [..._clearAlertMessageWithKey(messages, message.key), message];
    }

    if (_isDoneMessageForPendingAlert(message, existingMessage)) {
      existingMessage._pendingRequests =
        (existingMessage._pendingRequests ?? 0) - 1;
      return messages;
    }
  };

  function _createClearMessageJob(message) {
    if (message.timeout === -1) {
      return undefined;
    }

    return setTimeout(() => {
      setAlertMessages((messages) =>
        messages.filter((alertMessage) => alertMessage.key !== message.key)
      );
    }, message.timeout || 2000);
  }

  const _isIndefiniteInProgressAlert = (message) => {
    return message.type === TYPE_IN_PROGRESS && message.timeout === -1;
  };

  const _doesExistingAlertIsInProgress = (existingMessage) => {
    return existingMessage && existingMessage.type === TYPE_IN_PROGRESS;
  };

  const _isDoneMessageForPendingAlert = (message, existingMessage) => {
    return (
      (message.type === TYPE_SUCCESS || message.type === TYPE_FAILED) &&
      existingMessage &&
      (existingMessage._pendingRequests ?? 0) > 1
    );
  };

  const _clearAlertMessageWithKey = (messages, messageKey) => {
    const messagesToClear = messages.filter(
      (msg) =>
        msg.key === messageKey && msg.clearMessageTimeoutReference !== null
    );
    messagesToClear.forEach((messageToClear) => {
      clearTimeout(messageToClear.clearMessageTimeoutReference);
    });

    return messages.filter((msg) => msg.key !== messageKey);
  };

  return (
    <AlertMessagesContext.Provider value={{ postAlertMessage }}>
      <AlertMessagesComponent
        messages={alertMessages}
        clearAlertMessage={clearAlertMessage}
      />
      {children}
    </AlertMessagesContext.Provider>
  );
}
