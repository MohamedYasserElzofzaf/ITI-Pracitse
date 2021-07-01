import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render( <
    BrowserRouter > { " " } <
    Route path = "/"
    component = { Home }
    /> <
    Route path = "/profile"
    component = { Profile }
    /> <
    Route path = "/users"
    component = { Users }
    /> <
    Route path = "/user-details"
    component = { UserDetails }
    /> <
    App / >
    <
    /BrowserRouter>,
    document.getElementById("root")
);