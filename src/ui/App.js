import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

import LoginPage from "./pages/LoginPage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={LoginPage} />
        <Route path="/:login" component={UserDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
