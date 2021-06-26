import { Component } from "react";
import Search from "./components/search";
import NewsList from "./components/news-list";
import NEWSLIST from "./news-list.json";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            newsList: NEWSLIST,
        };
    }

    render() {
        return ( <
            div > { " " } <
            Search / >
            <
            NewsList list = { this.state.newsList }
            />{" "} <
            /div>
        );
    }
}