import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink as Link,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home";
import Profile from "./components/profile";
import Users from "./components/users";
import UserDetails from "./components/user-details";
import Nofound from "./components/notFound";

ReactDOM.render( <
    BrowserRouter > { " " } <
    App / >
    <
    ul className = "alert alert-dark" >
    <
    li >
    <
    Link exact activeClassName = "active"
    to = "/" > { " " }
    Home { " " } <
    /Link>{" "} <
    /li>{" "} <
    li >
    <
    Link activeClassName = "active"
    to = "/profile" > { " " }
    Profile { " " } <
    /Link>{" "} <
    /li>{" "} <
    li >
    <
    Link activeClassName = "active"
    to = "/user/6" > { " " }
    UserDetails { " " } <
    /Link>{" "} <
    /li>{" "} <
    li >
    <
    Link exact activeClassName = "active"
    to = "/users" > { " " }
    Users { " " } <
    /Link>{" "} <
    /li>{" "} <
    li >
    <
    Link activeClassName = "active"
    to = "/test" > { " " }
    Nofound { " " } <
    /Link>{" "} <
    /li>{" "} <
    /ul>{" "} <
    Switch >
    <
    Route path = "/user/id:"
    component = { UserDetails }
    />{" "} <
    Route path = "/profile"
    component = { Profile }
    />{" "} <
    Route exact path = "/users"
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