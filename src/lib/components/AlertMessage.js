import React from "react";
import Alert from "@mui/material/Alert";
import styles from "./AlertMessages.module.css";
import { TYPE_SUCCESS, TYPE_FAILED } from "../const";

export default function AlertMessageComponent({ message, clearAlertMessage }) {
  function handleClose() {
    const messageKey = message.key;
    if (!messageKey) {
      return;
    }
    clearAlertMessage(messageKey);
  }

  function _getSeverity(type) {
    switch (type) {
      case TYPE_SUCCESS:
        return "success";
      case TYPE_FAILED:
        return "error";
      default:
        return "info";
    }
  }

  return (
    <div key={message.key} className={styles.alertMessage}>
      <Alert
        onClose={handleClose}
        severity={_getSeverity(message.type)}
        elevation={6}
      >
        {message.text}
      </Alert>
    </div>
  );
}
