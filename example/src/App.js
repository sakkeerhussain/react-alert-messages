import "./App.css";
import AlertMessagesProvider from "react-alert-messages";
import SimpleAlertPage from "./SimpleAlertPage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlertMessagesProvider>
          <SimpleAlertPage /> {/*  <- The sample alert will trigger inside this */}
        </AlertMessagesProvider>
      </header>
    </div>
  );
}
