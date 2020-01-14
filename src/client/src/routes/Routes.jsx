import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Navigation from "../components/Navigation";
import Login from "./Login";

const Routes = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dashboard" render={() => <DashboardRoutes />} />
        <Route path="/login" render={() => <Login />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
