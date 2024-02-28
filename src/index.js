import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HashRouter>

    </HashRouter> */}
    <Router basename={process.env.APP_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

