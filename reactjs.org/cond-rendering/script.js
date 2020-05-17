var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Area 1

function UserGreeting() {
    return React.createElement(
        'h1',
        null,
        'Welcome back'
    );
}

function GuestGreeting() {
    return React.createElement(
        'h1',
        null,
        'Please sign in'
    );
}

function LoginButton(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Login'
    );
}

function LogoutButton(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Logout'
    );
}

var LoginControl = function (_React$Component) {
    _inherits(LoginControl, _React$Component);

    function LoginControl(props) {
        _classCallCheck(this, LoginControl);

        var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

        _this.state = { loggedIn: false };
        return _this;
    }

    _createClass(LoginControl, [{
        key: 'handleClickLogin',
        value: function handleClickLogin() {
            this.setState({ loggedIn: true });
        }
    }, {
        key: 'handleClickLogout',
        value: function handleClickLogout() {
            this.setState({ loggedIn: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                this.state.loggedIn ? React.createElement(
                    'div',
                    null,
                    React.createElement(UserGreeting, null),
                    React.createElement(LogoutButton, { onClick: function onClick() {
                            return _this2.handleClickLogout();
                        } })
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement(GuestGreeting, null),
                    React.createElement(LoginButton, { onClick: function onClick() {
                            return _this2.handleClickLogin();
                        } })
                )
            );
        }
    }]);

    return LoginControl;
}(React.Component);

ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('area1'));

// Area 2

function Mailbox(props) {
    var unreadMessages = props.unreadMessages;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello!'
        ),
        unreadMessages.length > 0 && React.createElement(
            'h2',
            null,
            'You have ',
            unreadMessages.length,
            ' unread messages.'
        )
    );
}

var messages = [];
// messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(React.createElement(Mailbox, { unreadMessages: messages }), document.getElementById('area2'));

// Area 3

function WarningBanner(props) {
    return props.warn ? React.createElement(
        'h2',
        { style: { color: "red", fontSize: "2em" } },
        'Warning!'
    ) : null;
}

var Page = function (_React$Component2) {
    _inherits(Page, _React$Component2);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this3 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this3.state = { showWarning: true };
        return _this3;
    }

    _createClass(Page, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (state) {
                return { showWarning: !state.showWarning };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(WarningBanner, { warn: this.state.showWarning }),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this4.handleClick();
                        } },
                    this.state.showWarning ? 'Hide' : 'Show'
                )
            );
        }
    }]);

    return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('area3'));