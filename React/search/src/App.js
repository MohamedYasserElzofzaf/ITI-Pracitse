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
            filteredList: NEWSLIST,
        };
    }
    filterNewsList = (keywords) => {
        //   filter
        const filteredList = this.state.newsList.filter((item) =>
            item.user.includes(keywords)
        );
        this.setState({ filteredList: filteredList });
    };
    render() {
        return ( <
            div > { " " } <
            Search onKeywordsChange = { this.filterNewsList }
            />{" "} <
            NewsList list = { this.state.filteredList }
            />{" "} <
            /div>
        );
    }
}