# react-alert-messages


### How to use

1. Add the line of code below to component that you wish to use the alert from

```
    const { postAlertMessage } = React.useContext(AlertMessageContext);
```

2. Invoke `postAlertMessage` with an `AlertMessage` object with `type` and `text` fields.
3. Should add `key` field to the `AlertMessage` object if you wanted to update the message later.
4. Send a new alert message object with the same key to override an existing alert message.
5. By default, the alert messages would be displayed for 2 seconds, and you can add the number of seconds on `timeout` property with the alert message to control the time alert message should be displayed.
6. Can pass `timeout` value as `-1` to display the alert message indefinitely.
7. If a message's `timeout` is `-1` and `type` is `pending`, will be displayed if there is no message already and will increment the internal `pending` message counter and will wait for the corresponding success message for that.

### How it works

1. `alertMessageProvider` component in `alertMessageContext.tsx` is wrapped with context provider as well as associated function to allow the alert message functionality
2. child component is wrapped with `alertMessageProvider` to allow the deliver of context.

