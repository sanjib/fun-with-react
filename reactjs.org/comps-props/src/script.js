function WelcomeFn(props) {
    return <h1 style={{color: "red"}}>Hello {props.name}</h1>;
}

class WelcomeCs extends React.Component {
    render() {
        return <h1 style={{color: "blue"}}>Hello {this.props.name}</h1>;
    }
}

function App() {
    return (
        <div>
            <WelcomeFn name="Larry" />
            <WelcomeFn name="Chuck" />
            <WelcomeCs name="Larry" />
            <WelcomeCs name="Chuck" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('area1')
)

// Extracting Components

function formatDate(dateObject) {
    return dateObject.toLocaleString();
}

function Avatar(props) {
    return <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name} />;
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const author = {
    name: "Sanjib Ahmad",
    avatarUrl: "../assets/images/sanjib-self-portrait.jpg"
};

ReactDOM.render(<Comment author={author}
                         text="Hello world comment..."
                         date={new Date()} />,
    document.getElementById('area2'));
