import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "yasser",
        };
    }

    render() {
        const styles = {
            container: {
                backgroundColor: "lightgrey",
                padding: "5px",
                margin: "5px",
                border: "2px solid black",
                borderRadius: "5px",
                textAlign: "center",
            },
        };
        return ( <
            div style = { styles.container } >
            <
            h1 > Hello!!{ this.state.name } < /h1>;{" "} <
            input type = "button"
            value = "change"
            onClick = {
                () => {
                    console.log("clicked");
                    this.setState({ name: "Mohamed" });
                }
            }
            />{" "} <
            /div>
        );
    }
}

export default App;