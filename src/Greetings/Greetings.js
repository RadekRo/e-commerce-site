function Greetings(props) {
    console.log(props)
    return (
        <div className="App">
            Hi {props.name}!
        </div>
    );
}
export default Greetings;