let user = {
    firstName: "Sanjib",
    lastName: "Ahmad",
    avatarUrl: "../assets/images/sanjib-self-portrait.jpg"
}

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    } else {
        return <h1>Hello, stranger.</h1>
    }
}

function getImage(user) {
    if (user) {
        return <img src={user.avatarUrl} />
    }
}

// user = null;

const greetElement = (
    <div>
        <div>{getGreeting(user)}</div>
        <div>{getImage(user)}</div>
    </div>
);

const farewellElement = (
    <div>
        <h2>Goodbye!</h2>
        <h2>Farewell!</h2>
    </div>
);

ReactDOM.render(greetElement, document.getElementById('greet'));
ReactDOM.render(farewellElement, document.getElementById('farewell'));