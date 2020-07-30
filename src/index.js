import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//router components
import HomePage from "views/HomePage.js";
import RegisterPage from "views/RegisterPage.js";
import CampainPage from 'views/CampainPage.js';
import LearnPage from 'views/LearnPage.js';
import ProfilePage from 'views/ProfilePage.js';
import ProfileEditPage from 'views/ProfileEditPage.js';
import EarnPage from 'views/EarnPage.js';
import KYCPage from 'views/KYCPage.js';
import KYCBankPage from 'views/KYCBankPage.js';
import KYCPanCardPage from 'views/KYCPanCardPage.js';
import KYCProgressPage from 'views/KYCProgressPage.js';
import KYCPendingPage from 'views/KYCCompletePage.js';
import CampaignRegisterPage from 'views/CampaignRegisterPage.js';
import HistoryPage from 'views/HistoryPage.js';
import WidthrawPage from 'views/WidthrawPage.js';
// import MainPage from 'views/MainPage.js';
import "assets/scss/material-kit-react.scss?v=1.9.0";
window.$host_url = 'https://famefactory2backend.infikick.com/api/v1/';

const BasicRouters = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/campain" component={CampainPage} />
      <Route path="/learn" component={LearnPage} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/profile-edit' component={ProfileEditPage} />
      <Route path='/earn' component={EarnPage} />
      <Route path='/kyc' component={KYCPage} />
      <Route path='/kyc-bank' component={KYCBankPage} />
      <Route path="/kyc-pan" component={KYCPanCardPage} />
      <Route path="/kyc-progress" component={KYCProgressPage} />
      <Route path="/kyc-pendding" component={KYCPendingPage} />
      <Route path="/campaign-register/:camp_id" component={CampaignRegisterPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/widthdraw" component={WidthrawPage} />
    </Switch>
  </Router>
);

render(<BasicRouters />, document.getElementById("root"));
