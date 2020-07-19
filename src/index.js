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

import "assets/scss/material-kit-react.scss?v=1.9.0";

const BasicRouters = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/campain" component={CampainPage} />
      <Route path="/learn" component={LearnPage} />
      <Route path='/profile' component={ProfilePage}/>
      <Route path='/profile-edit' component={ProfileEditPage}/>
      <Route path='/earn' component={EarnPage}/>
      <Route path='/kyc' component={KYCPage}/>
    </Switch>
  </Router>
);

render(<BasicRouters />, document.getElementById("root"));
