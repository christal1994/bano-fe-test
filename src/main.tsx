import React from 'react';
import ReactDOM from 'react-dom/client';
import { SerachProvider } from '@component/context/searchContext';
import App from './pages/index';
import './styles/reset.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SerachProvider>
      <App />
    </SerachProvider>
  </React.StrictMode>,
);
