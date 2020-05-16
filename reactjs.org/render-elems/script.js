// SIMPLE TEST
var element = React.createElement(
    'p',
    null,
    'hello greets...'
);
ReactDOM.render(element, document.getElementById('hello'));

// TICK
function tick() {
    var element = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello, world'
        ),
        React.createElement(
            'h2',
            null,
            'It is ',
            new Date().toLocaleTimeString()
        )
    );
    ReactDOM.render(element, document.getElementById('tick'));
}
setInterval(tick, 1000);