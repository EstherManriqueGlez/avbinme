import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/styles/utils/_global.scss';
import '@/styles/utils/_scroll-reveal.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
