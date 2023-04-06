import './App.css';
import { AlertMessagesContext } from 'react-alert-messages';
import { useContext } from 'react';
import { PAGES } from './Constants';

export default function SpecialUseCasesPage({ setPage }) {
  const { postAlertMessage } = useContext(AlertMessagesContext);

  return (
    <div id="page-root">
      <button
        onClick={() => {
          setPage(PAGES.HOME);
        }}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          padding: 5,
          cursor: 'pointer',
          fontSize: 15,
        }}
      >
        Back
      </button>
      <div>
        {/* Progress and success/failure*/}
        <div>
          <button
            onClick={async () => {
              const key = 'message-key-progress-success';

              postAlertMessage({
                key,
                text: 'This is a progress alert, will succeed soon',
                timeout: -1,
              });

              // Mock processing time
              await new Promise((resolve) => setTimeout(resolve, 2000));

              postAlertMessage({
                key,
                text: 'The process succeeded',
                type: 'success',
              });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Progress & Success
          </button>
          <button
            onClick={async () => {
              const key = 'message-key-progress-fail';

              postAlertMessage({
                key,
                text: 'This is a progress alert, will fail soon',
                timeout: -1,
              });

              // Mock processing time
              await new Promise((resolve) => setTimeout(resolve, 2000));

              postAlertMessage({
                key,
                text: 'The process failed',
                type: 'failed',
                timeout: 4000,
              });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Progress & Failure
          </button>
        </div>

        {/* Multiple progress and success/failure*/}
        <div style={{ marginTop: 30 }}>
          <button
            onClick={() => {
              const key = 'message-key-multiple-progress';
              postAlertMessage({
                key,
                text: 'Click success or failure button to get this dismissed',
                timeout: -1,
                type: 'in-progress',
              });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Post A Progress Alert
          </button>
          <button
            onClick={() => {
              const key = 'message-key-multiple-progress';
              postAlertMessage({
                key,
                text: 'The multiple progress job succeeded',
                timeout: -1,
                type: 'success',
              });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Post A Success Alert
          </button>
          <button
            onClick={() => {
              const key = 'message-key-multiple-progress';
              postAlertMessage({
                key,
                text: 'The multiple progress job failed',
                timeout: -1,
                type: 'failed',
              });
            }}
            style={{
              padding: 20,
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Post A Failure Alert
          </button>
        </div>
      </div>
    </div>
  );
}
