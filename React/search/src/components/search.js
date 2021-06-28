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
            h2 > Search Component < /h2>{" "} <
            input type = "text"
            placeholder = "Search by title"
            value = { this.state.keywords }
            onChange = {
                (e) => {
                    this.setState((state) => {
                        state.keywords = e.target.value;
                        return state;
                    });
                    this.props.onKeywordsChange(e.target.value);
                }
            }
            />{" "} <
            p > keywords: { this.state.keywords } < /p>{" "} <
            /div>
        );
    }
}