const NewsList = ({ title, list }) => {
    const renderedList = list.map((item) => ( <
        div className = "list-item" >
        <
        h4 > { item.title } < /h4> <p> {item.user} </p > { " " } <
        /div>
    ));
    return <div > { renderedList } < /div>;
};

export default NewsList;