const NewsList = ({ title, list }) => {
    if (list.length > 0) {
        const renderedList = list.map((item) => ( <
            div className = "list-item"
            key = { item.id } >
            <
            h4 > { item.user } < /h4> <p> {item.feed} </p > { " " } <
            /div>
        ));
        return <div className = "list-comp" > { renderedList } < /div>;
    }
    return ( <
        p style = {
            {
                color: "Black",
                backgroundColor: "red",
                width: "100%",
                height: "500%",
            }
        } >
        { " " }
        Not Found { " " } <
        /p>
    );
};

export default NewsList;