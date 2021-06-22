import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "yasser",
            imageUrl: "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        };
    }
    changeHandler = (e) => {
        this.setState({ txt: e.target.value });
    };
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
            h1 > Hello!!{ this.state.name } < /h1>{" "} <
            input type = "text"
            value = { this.state.txt }
            onChange = { this.changeHandler }
            />{" "} <
            input type = "button"
            value = "change"
            onClick = {
                () => {
                    console.log("clicked");
                    this.setState({
                        name: "Mohamed",
                        txt: "Tested",
                        imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    });
                }
            }
            />{" "} <
            img src = { this.state.imageUrl }
            alt = "home" / > { " " } <
            /div>
        );
    }
}

export default App;