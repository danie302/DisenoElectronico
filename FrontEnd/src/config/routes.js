// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../scenes/App";
import Home from "../scenes/Home";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </App>
);

export default AppRoutes;