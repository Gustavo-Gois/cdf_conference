function Card(props) {
    return (
        <div id="card">
            <h2>{props.children}</h2>
            <h3>{props.curso}</h3>
            <h3>{props.cargo}</h3>
        </div>
    );
}

export default Card;