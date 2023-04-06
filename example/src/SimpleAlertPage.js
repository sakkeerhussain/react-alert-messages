import logo from './logo.svg';
import './App.css';
import { AlertMessagesContext } from 'react-alert-messages';
import { useContext } from 'react';

export default function SimpleAlertPage() {
  const { postAlertMessage } = useContext(AlertMessagesContext);
  return (
    <div id="page-root">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is an example react app for 'react-alert-messages'</p>
      <div>
        <div>
          <button
            onClick={() => {
              postAlertMessage({ text: 'This is a test alert' });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            CLICK HERE TO TRY
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              postAlertMessage({ text: 'This is not implemented yet' });
            }}
            style={{
              marginTop: 20,
              cursor: 'pointer',
            }}
          >
            ADVANCED USE CASES
          </button>
        </div>
      </div>
    </div>
  );
}
