import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from "./Home";
import Matching from "./Matching";
import Homes from './Homes';
import Matching2 from "./Matching2";
import Purchase from "./Purchase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />}></Route>
          <Route path="/matching" element={<Matching />}></Route>
          <Route path="/matching2" element={<Matching2 />}></Route>
          <Route path="/purchase" element={<Purchase />}></Route>
          <Route path="/pc" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
