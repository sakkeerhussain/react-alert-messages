import React from "react";
import AlertMessageComponent from "./AlertMessage";
import styles from "./AlertMessages.module.css";

export default function AlertMessagesComponent({
  messages,
  clearAlertMessage,
}) {
  return (
    <div className={styles.alertMessagesLayout}>
      {messages.map((message) => {
        return (
          <AlertMessageComponent
            key={message.key}
            message={message}
            clearAlertMessage={clearAlertMessage}
          />
        );
      })}
    </div>
  );
}
