import './App.css';
import AlertMessagesProvider from 'react-alert-messages';
import { useState } from 'react';
import { PAGES } from './Constants';
import SimpleAlertPage from './SimpleAlertPage';
import SpecialUseCasesPage from './SpecialUseCasesPage';

export default function App() {
  const [page, setPage] = useState(PAGES.HOME);

  return (
    <div className="App">
      <header className="App-header">
        <AlertMessagesProvider>
          {page === PAGES.HOME && <SimpleAlertPage setPage={setPage} />}
          {page === PAGES.SPECIAL_USE_CASES && (
            <SpecialUseCasesPage setPage={setPage} />
          )}
        </AlertMessagesProvider>
      </header>
    </div>
  );
}
