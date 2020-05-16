var user = {
    firstName: "Sanjib",
    lastName: "Ahmad",
    avatarUrl: "./images/sanjib-self-portrait.jpg"
};

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return React.createElement(
            "h1",
            null,
            "Hello, ",
            formatName(user),
            "!"
        );
    } else {
        return React.createElement(
            "h1",
            null,
            "Hello, stranger."
        );
    }
}

function getImage(user) {
    if (user) {
        return React.createElement("img", { src: user.avatarUrl });
    }
}

// user = null;

var greetElement = React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        null,
        getGreeting(user)
    ),
    React.createElement(
        "div",
        null,
        getImage(user)
    )
);

var farewellElement = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        "Goodbye!"
    ),
    React.createElement(
        "h2",
        null,
        "Farewell!"
    )
);

ReactDOM.render(greetElement, document.getElementById('greet'));
ReactDOM.render(farewellElement, document.getElementById('farewell'));