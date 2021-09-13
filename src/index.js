import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    return worker.start();
  }
  return Promise.resolve();
}
prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
