// SIMPLE TEST
const element = <p>hello greets...</p>
ReactDOM.render(element, document.getElementById('hello'));

// TICK
function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tick'));
}
setInterval(tick, 1000);