import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListUsers from "./Dashboard/ListUsers";
import UserDetails from "./Dashboard/UserDetails";
import AddNewAsset from "./Dashboard/AddNewAsset";
import AssignAsset from "./Dashboard/AssignAsset";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route exact path="/dashboard/users" render={() => <ListUsers />} />
      <Route
        exact
        path="/dashboard/users/:id"
        render={renderProps => <UserDetails renderProps={renderProps} />}
      />
      <Route
        exact
        path="/dashboard/assets/assign/:id"
        render={renderProps => <AssignAsset renderProps={renderProps} />}
      />
      <Route
        exact
        path="/dashboard/assets/add_asset"
        render={() => <AddNewAsset />}
      />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
