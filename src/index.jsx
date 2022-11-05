import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import "normalize.css/normalize.css";

import ThemeContextProvider from './context/ThemeContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
