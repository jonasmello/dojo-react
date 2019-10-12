import React from "react";
import 'semantic-ui-css/semantic.min.css'

import "./App.scss";

import LoginPage from "./pages/LoginPage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <UserDetails />
    </div>
  );
}

export default App;
