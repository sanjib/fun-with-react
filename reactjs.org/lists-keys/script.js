
function ColorList(props) {
    var colors = props.colors || [];
    return React.createElement(
        'ul',
        null,
        colors.map(function (color) {
            return React.createElement(
                'li',
                { key: color },
                color
            );
        })
    );
}
var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
ReactDOM.render(React.createElement(ColorList, { colors: colors }), document.getElementById('area1'));

function ListItem(props) {
    console.log(props);
    return React.createElement(
        'li',
        null,
        props.value
    );
}

function NumberList(props) {
    var numbers = props.numbers || [];
    var listNumbers = numbers.map(function (number) {
        return React.createElement(
            'li',
            { key: number.toString() },
            number
        );
    });
    return React.createElement(
        'ul',
        null,
        numbers.map(function (number) {
            return React.createElement(ListItem, { key: number.toString(), value: number });
        })
    );
}
var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById('area2'));