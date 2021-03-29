import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import inx from "./components/index";
import admin from "./components/admin"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" component={inx} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/co21" component={admin} />
      </div>
    );
  }
}

export default App;
