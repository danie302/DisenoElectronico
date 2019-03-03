// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../scenes/App";
import Home from "../scenes/Home";
import GPS from "../scenes/GPS";

const AppRoutes = () => (
	<App>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/gps" exact component={GPS} />
		</Switch>
	</App>
);

export default AppRoutes;
