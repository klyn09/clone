import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 menggunakan 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Menggunakan alias 'Router'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Membuat root
root.render(
  <Router>
    <App />
  </Router>
);
