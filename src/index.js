import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// import Mobile from './Mobile'
// import Homes from './Components/Matching/Components/Homes';
// import Matching from "./Components/Matching/Components/Matching";
// import Purchase from "./Purchase";

//web페이지
import App from "./Components/PC/App";
import PCHome from "./Components/PC/PCHome";
import MobileMenu from "./Components/PC/Header/MobileMenu";
import DzzDzzIntrodue from "./Components/Matching/Components/DzzDzzIntrodue";
import Terms from "./Components/PC/Policy/Terms";
import Privacy from "./Components/PC/Policy/Privacy";

//matching페이지
import Homepage from "./Components/Matching/Components/MainComponent/Homepage";
import Purchasing from "./Components/Matching/Components/MainComponent/Purchasing";
import MatchingHome from "./Components/Matching/Components/MatchingHome";
import MatchingProgress from "./Components/Matching/Components/MatchingProgress";
import Matching2 from "./Components/Matching/Components/Matching/Matching2";
import DetailProfile from "./DetailProfile";
import ChoicePage from "./Components/Matching/Components/Matching/ChoicePage";
import ChoiceResult from "./Components/Matching/Components/Matching/ChoiceResult";
import ChoiceLoading from "./Components/Matching/Components/Matching/ChoiceResult";
import Coupon from "./Components/Matching/Components/MainComponent/Coupon";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/purchasing" element={<Purchasing />}></Route>
          <Route path="/MatchingHome" element={<MatchingHome />}></Route>
          <Route path="/MatchingProgress" element={<MatchingProgress />}></Route>
          <Route path="/matching2" element={<Matching2 />}></Route>
          <Route path="/detail" element={<DetailProfile />}></Route>
          <Route path="/Choice" element={<ChoicePage />}></Route>
          <Route path="/ChoiceResult" element={<ChoiceResult />}></Route>
          <Route path="/ChoiceLoading" element={<ChoiceLoading />}></Route>
          <Route path="/Coupon" element={<Coupon />}></Route>


          <Route path="/pchome" element={<PCHome />}></Route>
          <Route path="/pc" element={<App />}></Route>
          <Route path="MobileMenu" element={<MobileMenu />}></Route>
          <Route path="DzzIntroduce" element={<DzzDzzIntrodue />}></Route>
          <Route path="Terms" element={<Terms />}></Route>
          <Route path="Privacy" element={<Privacy />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
