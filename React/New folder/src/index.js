import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home";
import Profile from "./components/profile";
import Users from "./components/users";
import UserDetails from "./components/user-details";
import Nofound from "./components/notFound";

ReactDOM.render( <
    BrowserRouter > { " " } <
    App / > { " " } <
    Switch >
    <
    Route path = "/user/id:"
    component = { UserDetails }
    />{" "} <
    Route path = "/profile"
    component = { Profile }
    />{" "} <
    Route path = "/users"
    component = { Users }
    />{" "} <
    Route exact path = "/"
    component = { Home }
    />{" "} <
    Route path = "*"
    component = { Nofound }
    />{" "} <
    /Switch>{" "} <
    /BrowserRouter>,
    document.getElementById("root")
);