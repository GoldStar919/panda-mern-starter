import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        render={() => <Login authenticate={this.authenticate} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <Signup authenticate={this.authenticate} />}
      />
      <Route
        path="/dashboard"
        render={() =>
          this.state.user.isLoggedIn ? (
            <Dashboard
              authenticate={this.authenticate}
              user={this.state.user}
            />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
};

export default AppRoutes;
