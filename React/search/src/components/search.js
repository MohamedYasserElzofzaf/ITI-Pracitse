import { Component } from "react";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            keywords: "",
        };
    }

    render() {
        return ( <
            div className = "search-comp" >
            <
            input type = "text"
            placeholder = "Search by title"
            value = { this.state.keywords }
            onChange = {
                (e) => this.setState({ keywords: e.target.value }) }
            />{" "} <
            p > keywords: { this.state.keywords } < /p>{" "} <
            /div>
        );
    }
}