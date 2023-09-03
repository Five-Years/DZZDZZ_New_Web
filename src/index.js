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
import DzzDzzIntrodue from "./Components/Matching/Components/MainComponent/Notice/DzzDzzIntrodue";
import Terms from "./Components/PC/Policy/Terms";
import Privacy from "./Components/PC/Policy/Privacy";

//matching페이지
import MatchingHomePage from "./Components/Matching/Components/MainComponent/MatchingHomePage";
import Purchasing from "./Components/Matching/Components/MainComponent/PurchasingComponent/Purchasing";
import MatchingPage from "./Components/Matching/Components/MainComponent/Matching/MatchingPage";
import MatchingProgress from "./Components/Matching/Components/MainComponent/Matching/MatchingProgress";
import Matching2 from "./Components/Matching/Components/MainComponent/Matching/Matching2";
import DetailProfile from "./DetailProfile";
import ChoicePage from "Components/Matching/Components/MainComponent/Matching/Choice/ChoicePage";
import ChoiceResult from "Components/Matching/Components/MainComponent/Matching/Choice/ChoiceResult";
import ChoiceLoading from "Components/Matching/Components/MainComponent/Matching/Choice/ChoiceLoading";
import Coupon from "Components/Matching/Components/MainComponent/CouponComponent/Coupon";
import HistoryPage from "Components/Matching/Components/MainComponent/HistoryComponent/HistoryPage";
import MatchHistory from "Components/Matching/Components/MainComponent/HistoryComponent/MatchHistory";
import HistoryMatchingProfile from "Components/Matching/Components/MainComponent/HistoryComponent/HistoryMatchingProfile";
import Marketing from "Components/PC/Policy/Marketing";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/Temp" element={<TempHomePage />}></Route>
        <Route path="/Matching" element={<MatchingHomePage />}></Route>
        <Route path="/purchasing" element={<Purchasing />}></Route>
        <Route path="/matchingPage" element={<MatchingPage />}></Route>
        <Route path="/matchingProgress" element={<MatchingProgress />}></Route>
        <Route path="/matching2" element={<Matching2 />}></Route>
        <Route path="/detail" element={<DetailProfile />}></Route>
        <Route path="/choice" element={<ChoicePage />}></Route>
        <Route path="/choiceResult" element={<ChoiceResult />}></Route>
        <Route path="/choiceLoading" element={<ChoiceLoading />}></Route>
        <Route path="/coupon" element={<Coupon />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/matchhistory" element={<MatchHistory />}></Route>
        <Route
          path="/historymatchingprofile"
          element={<HistoryMatchingProfile />}
        ></Route>

        <Route path="/" element={<PCHome />}></Route>
        <Route path="/pc" element={<App />}></Route>
        <Route path="MobileMenu" element={<MobileMenu />}></Route>
        <Route path="DzzIntroduce" element={<DzzDzzIntrodue />}></Route>
        <Route path="Terms" element={<Terms />}></Route>
        <Route path="Privacy" element={<Privacy />}></Route>
        <Route path="marketing" element={<Marketing />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
