import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import AdoptPage from "./pages/AdoptPage";
import AdminstrationPage from "./pages/AdminstrationPage";
import "./App.css";
import { AppBar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar>
        <Router>
          <Switch>
            <Route path="/" exact>
              <AdoptPage />
            </Route>
            <Route path="/adminstration">
              <AdminstrationPage />
            </Route>
          </Switch>
        </Router>
      </AppBar>
    </div>
  );
}

export default App;
