
function ColorList(props) {
    const colors = props.colors || [];
    return (
        <ul>
            {colors.map(color => <li key={color}>{color}</li>)}
        </ul>
    )
}
const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
ReactDOM.render(<ColorList colors={colors} />, document.getElementById('area1'));

function ListItem(props) {
    console.log(props);
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers || [];
    const listNumbers = numbers.map(number => <li key={number.toString()}>{number}</li>);
    return (
        <ul>
            {numbers.map(number =>
                <ListItem key={number.toString()} value={number} />)}
        </ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('area2'));
