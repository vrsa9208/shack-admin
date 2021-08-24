import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Calendar from "./views/Calendar/Calendar";

const App = ({ user }) => {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Calendar />
            </Route>
            <Route exact path="/shacks">
              <h1>Business List</h1>
            </Route>
            <Route path="/business/:businessId">
              <h1>Details</h1>
            </Route>
          </Switch>
        </HashRouter>
      </MainLayout>
    </>
  );
};

export default App;
