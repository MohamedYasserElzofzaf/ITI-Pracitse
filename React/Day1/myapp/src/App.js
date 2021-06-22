import React from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "yasser",
        };
    }

    render() {
        return ( <
            div >
            <
            h1 > Hello!!{ this.state.name } < /h1>;{" "} <
            input type = "button"
            value = "change"
            onClick = {
                () => {
                    console.log("clicked");
                }
            }
            />{" "} <
            /div>
        );
    }
}

export default App;