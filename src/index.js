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
import Homepage from './Components/Matching/Components/Homepage';
import MatchingHome from './Components/Matching/Components/MatchingHome';
import MatchingProgress from './Components/Matching/Components/MatchingProgress';
import Purchase from "./Purchase";
import Purchasing from './Components/Matching/Components/Purchasing';
import DetailProfile from './DetailProfile';
import Parents from './Parents';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PCHome from './PCHome';
import MobileMenu from './Components/Matching/Components/MobileMenu';
import DzzDzzIntrodue from './Components/Matching/Components/DzzDzzIntrodue';
import Terms from './Components/Matching/Components/Terms';
import Privacy from './Components/Matching/Components/Privacy';
import ChoicePage from './Components/Matching/Components/ChoicePage';
import ChoiceResult from './Components/Matching/Components/ChoiceResult';
import ChoiceLoading from './Components/Matching/Components/ChoiceLoading';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

// onBlur 타입이 오면 메인으로 이동
// const listener = (event) => {
//   const {data,type} = JSON.parse(event);
//   switch (type) {
//     case 'onBlur' :
//       navigate("/");
//   }
// };
// const navigate = useNavigate();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/MatchingHome" element={<MatchingHome />}></Route>
          <Route path="/MatchingProgress" element={<MatchingProgress />}></Route>
          <Route path="/matching2" element={<Matching2 />}></Route>
          <Route path="/purchase" element={<Purchasing />}></Route>
          <Route path="/purchasing" element={<Purchasing />}></Route>
          <Route path="/detail" element={<DetailProfile />}></Route>
          <Route path="/PCHome" element={<PCHome />}></Route>
          <Route path="/pc" element={<App />}></Route>
          <Route path="MobileMenu" element={<MobileMenu />}></Route>
          <Route path="DzzIntroduce" element={<DzzDzzIntrodue />}></Route>
          <Route path="Terms" element={<Terms />}></Route>
          <Route path="Privacy" element={<Privacy />}></Route>
          <Route path="Choice" element={<ChoicePage />}></Route>
          <Route path="ChoiceResult" element={<ChoiceResult />}></Route>
          <Route path="ChoiceLoading" element={<ChoiceLoading />}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
