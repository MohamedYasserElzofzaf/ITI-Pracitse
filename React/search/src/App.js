import { Component } from "react";
import Search from "./components/search";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return ( <
            div > { " " } <
            Search / > { " " } <
            /div>
        );
    }
}