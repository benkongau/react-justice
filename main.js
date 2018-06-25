'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chats = function (_React$Component) {
  _inherits(Chats, _React$Component);

  function Chats(props) {
    _classCallCheck(this, Chats);

    var _this = _possibleConstructorReturn(this, (Chats.__proto__ || Object.getPrototypeOf(Chats)).call(this, props));

    _this.state = { page: 'chats' };
    return _this;
  }

  _createClass(Chats, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Chats page'
      );
    }
  }]);

  return Chats;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
  _inherits(Contacts, _React$Component);

  function Contacts(props) {
    _classCallCheck(this, Contacts);

    var _this = _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));

    _this.state = { newUserID: '' };
    return _this;
  }

  _createClass(Contacts, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "input-group mb-3" },
          React.createElement("input", { type: "text", className: "form-control", placeholder: "User ID", "aria-label": "User ID", "aria-describedby": "basic-addon2" }),
          React.createElement(
            "div",
            { className: "input-group-append" },
            React.createElement(
              "button",
              { className: "btn btn-outline-secondary", type: "button" },
              "+"
            )
          )
        )
      );
    }
  }]);

  return Contacts;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.state = { page: 'chats' };

        runLinkState(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "nav",
                    { className: "navbar navbar-expand-md navbar-dark bg-dark fixed-top" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { className: "navbar-brand", href: "#" },
                            "Justice from Freedom"
                        )
                    ),
                    this.state.page == 'detail' ? React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { className: "navbar-brand", onClick: this.handleBack },
                            React.createElement("span", { className: "oi oi-arrow-left" }),
                            " Back"
                        )
                    ) : "",
                    React.createElement(
                        "button",
                        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarsJustice", "aria-controls": "navbarsJustice", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                        React.createElement("span", { className: "navbar-toggler-icon" })
                    ),
                    React.createElement(
                        "div",
                        { className: "collapse navbar-collapse", id: "navbarsJustice" },
                        React.createElement(
                            "ul",
                            { className: "navbar-nav mr-auto" },
                            React.createElement(
                                "li",
                                { className: "nav-item active" },
                                React.createElement(
                                    "a",
                                    { className: "nav-link", href: "#" },
                                    "Home ",
                                    React.createElement(
                                        "span",
                                        { className: "sr-only" },
                                        "(current)"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item" },
                                React.createElement(
                                    "a",
                                    { className: "nav-link", onClick: this.handleChats },
                                    "Chats"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item" },
                                React.createElement(
                                    "a",
                                    { className: "nav-link", onClick: this.handleContacts },
                                    "Contacts"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item" },
                                React.createElement(
                                    "a",
                                    { className: "nav-link", onClick: this.handleMoments },
                                    "Moments"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "nav-item" },
                                React.createElement(
                                    "a",
                                    { className: "nav-link", onClick: this.handleMe },
                                    "Me"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "nav",
                    { className: "navbar navbar-expand-md navbar-dark bg-dark fixed-bottom" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { className: "btn-group btn-group-toggle" },
                            React.createElement(
                                "label",
                                { className: ["btn btn-secondary", this.state.page == "chats" ? "active" : ""].join(' ') },
                                React.createElement("input", { type: "radio", name: "navBarPage", value: "chats", onChange: this.linkStateProps('page', 'onPageChange') }),
                                " Chats"
                            ),
                            React.createElement(
                                "label",
                                { className: ["btn btn-secondary", this.state.page == "contacts" ? "active" : ""].join(' ') },
                                React.createElement("input", { type: "radio", name: "navBarPage", value: "contacts", onChange: this.linkStateProps('page', 'onPageChange') }),
                                " Contacts"
                            ),
                            React.createElement(
                                "label",
                                { className: ["btn btn-secondary", this.state.page == "moments" ? "active" : ""].join(' ') },
                                React.createElement("input", { type: "radio", name: "navBarPage", value: "moments", onChange: this.linkStateProps('page', 'onPageChange') }),
                                " Moments"
                            ),
                            React.createElement(
                                "label",
                                { className: ["btn btn-secondary", this.state.page == "me" ? "active" : ""].join(' ') },
                                React.createElement("input", { type: "radio", name: "navBarPage", value: "me", onChange: this.linkStateProps('page', 'onPageChange') }),
                                " Me"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Justice = function (_React$Component) {
    _inherits(Justice, _React$Component);

    function Justice(props) {
        _classCallCheck(this, Justice);

        var _this2 = _possibleConstructorReturn(this, (Justice.__proto__ || Object.getPrototypeOf(Justice)).call(this, props));

        _this2.state = { page: 'chats' };

        runLinkState(_this2);
        return _this2;
    }

    _createClass(Justice, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(Navbar, { onPageChange: this.linkState('page') }),
                React.createElement(
                    'div',
                    { role: 'main', style: { paddingTop: "63px" } },
                    this.state.page == 'chats' ? React.createElement(Chats, null) : "",
                    this.state.page == 'contacts' ? React.createElement(Contacts, null) : ""
                )
            );
        }
    }]);

    return Justice;
}(React.Component);

var runLinkState = function runLinkState(_this) {
    _this.linkState = function (key) {
        return function (event) {
            _this.setState(_defineProperty({}, key, event.target.value));
        };
    };

    _this.linkStateProps = function (key, propName) {
        return function (event) {
            _this.setState(_defineProperty({}, key, event.target.value));
            _this.props[propName](event);
        };
    };
};
ReactDOM.render(React.createElement(Justice, null), document.getElementById('app'));

