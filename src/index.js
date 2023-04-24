import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
// import Mobile from './Mobile'
import reportWebVitals from './reportWebVitals';
import './index.css';
import Homes from './Components/Matching/Components/Homes';
import Matching from "./Components/Matching/Components/Matching";
import Matching2 from "./Components/Matching/Components/Matching2";
import Purchase from "./Purchase";
import Purchasing from './Components/Matching/Components/Purchasing';
import DetailProfile from './DetailProfile';
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
          <Route path="/purchase" element={<Purchasing />}></Route>
          <Route path="/purchasing" element={<Purchasing />}></Route>
          <Route path="/detail" element={<DetailProfile />}></Route>
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
