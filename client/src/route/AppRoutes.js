import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Redirect } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

{
  /* <Route
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
/> */
}
