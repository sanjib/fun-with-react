// Area 1

function UserGreeting() {
    return <h1>Welcome back</h1>
}

function GuestGreeting() {
    return <h1>Please sign in</h1>
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    handleClickLogin() {
        this.setState({loggedIn: true});
    }

    handleClickLogout() {
        this.setState({loggedIn: false});
    }

    render() {
        return (
            <div>
                {this.state.loggedIn
                    ?   <div>
                            <UserGreeting />
                            <LogoutButton onClick={() => this.handleClickLogout()} />
                        </div>
                    :   <div>
                            <GuestGreeting/>
                            <LoginButton onClick={() => this.handleClickLogin()} />
                        </div>}
            </div>
        );
    }
}

ReactDOM.render(<LoginControl />, document.getElementById('area1'))

// Area 2

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} unread messages.</h2>}
        </div>
    );
}

let messages = [];
// messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('area2'));

// Area 3

function WarningBanner(props) {
    return props.warn
        ? <h2 style={{color: "red", fontSize: "2em"}}>Warning!</h2>
        : null;
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
    }

    handleClick() {
        this.setState(state => ({showWarning: !state.showWarning}));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={() => this.handleClick()}>
                    {this.state.showWarning
                        ? 'Hide'
                        : 'Show'}
                </button>
            </div>
        );
    }
}
ReactDOM.render(<Page />, document.getElementById('area3'));
