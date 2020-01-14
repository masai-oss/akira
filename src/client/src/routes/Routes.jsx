import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Navigation from "../components/Navigation";
import Register from "./Register";

const Routes = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/signup" render={() => <Register />} />
        <Route path="/dashboard" render={() => <DashboardRoutes />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
