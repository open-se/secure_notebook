"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _appBuilderLib = require("app-builder-lib");

var _menu_manager = _interopRequireDefault(require("../../singletons/menu_manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LoginContainer = _styledComponents.default.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #F8F8F8;
`;
const CenteredWidget = _styledComponents.default.div`
  text-align: center;
  line-height: 2px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Login extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: ''
    };

    this.componentDidMount = () => {
      _menu_manager.default.loadLoginMenu();

      document.body.style.margin = 0;
      document.body.style.backgroundColor = "#212121";
    };

    this.handleLogin = () => {
      this.props.onLogin({
        loggedIn: true
      });
    };

    this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    };

    this.onKeyDown = e => {
      if (e.keyCode == 13) {
        global.loggedInState = {
          p: e.target.value
        };
        this.handleLogin();
      }
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(LoginContainer, null, /*#__PURE__*/_react.default.createElement(CenteredWidget, null, /*#__PURE__*/_react.default.createElement("h1", null, "Login"), /*#__PURE__*/_react.default.createElement("h4", null, "(Input Password)"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      onKeyDown: this.onKeyDown
    })));
  }

}

exports.default = Login;
Login.propTypes = {
  onLogin: _propTypes.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbXBvbmVudHMvTG9naW4uanMiXSwibmFtZXMiOlsiTG9naW5Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDZW50ZXJlZFdpZGdldCIsIkxvZ2luIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJ1c2VybmFtZSIsImNvbXBvbmVudERpZE1vdW50IiwiTWVudU1hbmFnZXIiLCJsb2FkTG9naW5NZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVMb2dpbiIsInByb3BzIiwib25Mb2dpbiIsImxvZ2dlZEluIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZ2xvYmFsIiwibG9nZ2VkSW5TdGF0ZSIsInAiLCJyZW5kZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU1BLGNBQWMsR0FBR0MsMEJBQU9DLEdBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT0EsTUFBTUMsY0FBYyxHQUFHRiwwQkFBT0MsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7O0FBVWUsTUFBTUUsS0FBTixTQUFvQkMsZ0JBQXBCLENBQThCO0FBQUE7QUFBQTtBQUFBLFNBSzNDQyxLQUwyQyxHQUtuQztBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLQUxtQzs7QUFBQSxTQVMzQ0MsaUJBVDJDLEdBU3ZCLE1BQU07QUFDeEJDLDRCQUFZQyxhQUFaOztBQUNBQyxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBN0I7QUFDQUgsTUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JFLGVBQXBCLEdBQXNDLFNBQXRDO0FBQ0QsS0FiMEM7O0FBQUEsU0FlM0NDLFdBZjJDLEdBZTdCLE1BQU07QUFDbEIsV0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CO0FBQ2pCQyxRQUFBQSxRQUFRLEVBQUU7QUFETyxPQUFuQjtBQUdELEtBbkIwQzs7QUFBQSxTQXFCM0NDLFlBckIyQyxHQXFCM0JDLENBQUQsSUFBTztBQUNwQixXQUFLQyxRQUFMLENBQWM7QUFDWmYsUUFBQUEsUUFBUSxFQUFFYyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFEUCxPQUFkO0FBR0QsS0F6QjBDOztBQUFBLFNBMkIzQ0MsU0EzQjJDLEdBMkI5QkosQ0FBRCxJQUFPO0FBQ2pCLFVBQUdBLENBQUMsQ0FBQ0ssT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2pCQyxRQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUI7QUFDckJDLFVBQUFBLENBQUMsRUFBRVIsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRFMsU0FBdkI7QUFHQSxhQUFLUixXQUFMO0FBQ0Q7QUFDRixLQWxDMEM7QUFBQTs7QUFvQzNDYyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw2QkFBQyxjQUFELHFCQUNFLDZCQUFDLGNBQUQscUJBQ0UsaURBREYsZUFFRSw0REFGRixlQUdFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLFNBQVMsRUFBRSxLQUFLTDtBQUFuQyxNQUhGLENBREYsQ0FERjtBQVNEOztBQTlDMEM7OztBQUF4QnJCLEssQ0FDWjJCLFMsR0FBWTtBQUNqQmIsRUFBQUEsT0FBTyxFQUFFYyxtQkFBVUMsSUFBVixDQUFlQztBQURQLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBidWlsZEZvcmdlIH0gZnJvbSAnYXBwLWJ1aWxkZXItbGliJztcclxuaW1wb3J0IE1lbnVNYW5hZ2VyIGZyb20gJy4uLy4uL3NpbmdsZXRvbnMvbWVudV9tYW5hZ2VyJztcclxuXHJcbmNvbnN0IExvZ2luQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbmA7XHJcblxyXG5jb25zdCBDZW50ZXJlZFdpZGdldCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICBNZW51TWFuYWdlci5sb2FkTG9naW5NZW51KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzIxMjEyMVwiO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkxvZ2luKHtcclxuICAgICAgbG9nZ2VkSW46IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xyXG4gICAgICBnbG9iYWwubG9nZ2VkSW5TdGF0ZSA9IHtcclxuICAgICAgICBwOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmhhbmRsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExvZ2luQ29udGFpbmVyPlxyXG4gICAgICAgIDxDZW50ZXJlZFdpZGdldD5cclxuICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICA8aDQ+KElucHV0IFBhc3N3b3JkKTwvaDQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbktleURvd249e3RoaXMub25LZXlEb3dufS8+XHJcbiAgICAgICAgPC9DZW50ZXJlZFdpZGdldD5cclxuICAgICAgPC9Mb2dpbkNvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJmaWxlIjoicmVuZGVyZXIvY29tcG9uZW50cy9Mb2dpbi5qcyJ9
