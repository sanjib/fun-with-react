var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WelcomeFn(props) {
    return React.createElement(
        "h1",
        { style: { color: "red" } },
        "Hello ",
        props.name
    );
}

var WelcomeCs = function (_React$Component) {
    _inherits(WelcomeCs, _React$Component);

    function WelcomeCs() {
        _classCallCheck(this, WelcomeCs);

        return _possibleConstructorReturn(this, (WelcomeCs.__proto__ || Object.getPrototypeOf(WelcomeCs)).apply(this, arguments));
    }

    _createClass(WelcomeCs, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                { style: { color: "blue" } },
                "Hello ",
                this.props.name
            );
        }
    }]);

    return WelcomeCs;
}(React.Component);

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(WelcomeFn, { name: "Larry" }),
        React.createElement(WelcomeFn, { name: "Chuck" }),
        React.createElement(WelcomeCs, { name: "Larry" }),
        React.createElement(WelcomeCs, { name: "Chuck" })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('area1'));

// Extracting Components

function formatDate(dateObject) {
    return dateObject.toLocaleString();
}

function Avatar(props) {
    return React.createElement("img", { className: "Avatar",
        src: props.user.avatarUrl,
        alt: props.user.name });
}

function UserInfo(props) {
    return React.createElement(
        "div",
        { className: "UserInfo" },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(
            "div",
            { className: "UserInfo-name" },
            props.user.name
        )
    );
}

function Comment(props) {
    return React.createElement(
        "div",
        { className: "Comment" },
        React.createElement(UserInfo, { user: author }),
        React.createElement(
            "div",
            { className: "Comment-text" },
            props.text
        ),
        React.createElement(
            "div",
            { className: "Comment-date" },
            formatDate(props.date)
        )
    );
}

var author = {
    name: "Sanjib Ahmad",
    avatarUrl: "../assets/images/sanjib-self-portrait.jpg"
};

ReactDOM.render(React.createElement(Comment, { author: author,
    text: "Hello world comment...",
    date: new Date() }), document.getElementById('area2'));