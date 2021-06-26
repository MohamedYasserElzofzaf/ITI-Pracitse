const NewsList = ({ title, list }) => {
    const renderedList = list.map((item) => ( <
        div className = "list-item"
        key = { item.id } >
        <
        h4 > { item.user } < /h4> <p> {item.feed} </p > { " " } <
        /div>
    ));
    return <div className = "list-comp" > { renderedList } < /div>;
};

export default NewsList;