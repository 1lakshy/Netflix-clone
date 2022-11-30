import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { store } from "./store/index";
import { Provider } from "react-redux";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <StrictMode>
    {/* <CookiesProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </CookiesProvider> */}
  </StrictMode>



);
