class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((state, props) => ({count: state.count + 1}));
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={(e) => this.handleClick(e)}>Click me!</button>
            </div>
        )
    }
}
ReactDOM.render(<Toggle />, document.getElementById('area1'));