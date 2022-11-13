import { useContext } from "react";
import { AlertMessagesProvider, AlertMessagesContext } from "../lib";

function App() {
  return (
    <AlertMessagesProvider>
      <SubComponent />
    </AlertMessagesProvider>
  );
}

function SubComponent() {
  const { postAlertMessage } = useContext(AlertMessagesContext);
  return (
    <button
      onClick={() => {
        // alert("test");
        postAlertMessage({ text: "This is a test alert" });
      }}
    >
      Button
    </button>
  );
}

export default App;
