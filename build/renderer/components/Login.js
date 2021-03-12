"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Login extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: ''
    };

    this.handleLogin = () => {
      this.props.onLogin({
        username: this.state.username,
        loggedIn: true
      });
    };

    this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Login"), /*#__PURE__*/_react.default.createElement("input", {
      onChange: this.handleChange,
      type: "text",
      value: this.state.username
    }), /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.handleLogin
    }, "Log In"));
  }

}

exports.default = Login;
Login.propTypes = {
  onLogin: _propTypes.default.func.isRequired
};