import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from './feautures/store';
import "../node_modules/@splidejs/splide/dist/css/splide.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store= {store}>
        <App />
      </Provider> 
  </React.StrictMode>
);

