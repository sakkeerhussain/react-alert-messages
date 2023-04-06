# react-alert-messages

## Features
- Alert messages disappear after fixed time
- Option to configure the alert display time
- Support to show alerts indefinitely
- Option to remove an alert with alert ID
- Option to update existing alert details
- Support multiple pending message with same key and hold the pending message until all get success or failed messages

<img src="https://raw.githubusercontent.com/sakkeerhussain/react-alert-messages/main/docs/gifs/basic-alert-message.gif" alt="gif" width="100%" height="auto">

## How to use

- First, install the package using npm or yarn:
    ```
    npm install react-alert-messages
    ```
  or

    ```
    yarn add react-alert-messages
    ```

- Import the AlertMessageContext, AlertMessagesProvider and the useContext hook from react in your component:
  jsx
    ```
    import React, { useContext } from 'react';
    import { AlertMessageContext, AlertMessagesProvider } from 'react-alert-messages';
    ```

- Wrap your root component with the AlertMessagesProvider component, and pass in any necessary options as props:
  jsx
    ```
    function App() {
      return (
        <AlertMessagesProvider position="top-right" timeout={5000}>
        {/* The rest of your application */}
        </AlertMessagesProvider>
      );
    }
    ```

- Call the useContext hook to get a reference to the AlertMessageContext and the postAlertMessage function:
  jsx
    ```
    const { postAlertMessage } = useContext(AlertMessageContext);
    ```

  In this example, we are passing in the text property to the postAlertMessage function. Details of the other properties are provided below in the config details section.


- Use the postAlertMessage function to post an alert message in response to a user action, such as a button click:
  jsx

    ```
    const handleClick = () => {
    postAlertMessage({ text: 'This is a test message' });
    };
    
    return (
      <div>
        {/* The rest of your component */}
        <button onClick={handleClick}>Post message</button>
      </div>
    );
    ```

  And that's it! With these steps, you should be able to use react-alert-messages to post customizable alert messages in response to user actions using the AlertMessageContext and the postAlertMessage function.


## Special Use cases
### Progress and success/error alert
Can post an indefinite info type alert with loading message with a unique key. After completing the action, the same alert message can be updated to success or error message based on the action's outcome with a fixed timeout.

<img src="https://raw.githubusercontent.com/sakkeerhussain/react-alert-messages/main/docs/gifs/progress-and-success-or-failure.gif" alt="gif" width="100%" height="auto">

### Multiple progress and one success or failure
Can post multiple pending alert messages and send success and failure updates for each. The alert message handler will hold the progress message until received all success/failure message corresponding to each pending and will show the success/failure based on the update messages.

<img src="https://raw.githubusercontent.com/sakkeerhussain/react-alert-messages/main/docs/gifs/multiple-progress.gif" alt="gif" width="100%" height="auto">

[//]: # (## How to use)

[//]: # ()
[//]: # (1. Wrap the root component in `AlertMessagesProvider` layout component, Or can wrap the parent component of where you which to trigger the alert messages.)

[//]: # (2. Add the line of code below to component that you wish to use the alert from)

[//]: # ()
[//]: # (```)

[//]: # (    const { postAlertMessage } = React.useContext&#40;AlertMessageContext&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (2. Invoke `postAlertMessage` with an `AlertMessage` object with `type` and `text` fields.)

[//]: # (3. Should add `key` field to the `AlertMessage` object if you wanted to update the message later.)

[//]: # (4. Send a new alert message object with the same key to override an existing alert message.)

[//]: # (5. By default, the alert messages would be displayed for 2 seconds, and you can add the number of seconds on `timeout` property with the alert message to control the time alert message should be displayed.)

[//]: # (6. Can pass `timeout` value as `-1` to display the alert message indefinitely.)

[//]: # (7. If a message's `timeout` is `-1` and `type` is `pending`, will be displayed if there is no message already and will increment the internal `pending` message counter and will wait for the corresponding success message for that.)

## Config Details

### Alert message types

- success
- error
- in-progress

### Alert message timeout
The timeout prop specifies how long the alert messages should be displayed before automatically disappearing. Timeout should be passed in milliseconds. This will be defaulted with 2000 if not passed. This will support `-1` as value to display the message indefinitely.


## How it works

1. `alertMessageProvider` component in `alertMessageContext.tsx` is wrapped with context provider as well as associated function to allow the alert message functionality
2. child component is wrapped with `alertMessageProvider` to allow the deliver of context.

