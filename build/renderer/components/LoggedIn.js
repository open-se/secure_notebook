"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropShadowCol = exports.Col = exports.Row = exports.Grid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _menu_manager = _interopRequireDefault(require("../../singletons/menu_manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Grid = _styledComponents.default.div`
 position: absolute;
 height: calc(100% - 1px);
 width: calc(100% - 2px);
 margin: 0;
 background-color: salmon;
 border-bottom: 1px solid #212121;
 border-right: 1px solid #212121;
 border-left: 1px solid #212121;
`;
exports.Grid = Grid;
const Row = _styledComponents.default.div`
  display: flex;
  Height: 100%;
`;
exports.Row = Row;
const Col = _styledComponents.default.div`
  flex: ${props => props.size};
  background-color: ${props => props.color};
`;
exports.Col = Col;
const DropShadowCol = _styledComponents.default.div`
  flex: ${props => props.size};
  background-color: ${props => props.color};
  -webkit-box-shadow: 0px 4px 19px 0px #000000; 
  box-shadow: 0px 4px 19px 0px #000000;
  z-index = 1000;
`;
exports.DropShadowCol = DropShadowCol;

class LoggedIn extends _react.Component {
  constructor(...args) {
    super(...args);

    this.componentDidMount = () => {
      global.loadLoggedInMenu();
      document.body.style.margin = 0;
      document.body.style.backgroundColor = "#212121";
    };

    this.handleLogout = e => {
      this.props.onLogout({
        username: '',
        loggedIn: false
      });
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Grid, {
      onKeyDown: this.handleLogout
    }, /*#__PURE__*/_react.default.createElement(Row, null, /*#__PURE__*/_react.default.createElement(Col, {
      size: 1,
      color: "#1a1a1a"
    }), /*#__PURE__*/_react.default.createElement(Col, {
      size: 1.5,
      color: "#f8f8f8"
    }), /*#__PURE__*/_react.default.createElement(Col, {
      size: 3.5,
      color: "#ffffff"
    })));
  }

}

exports.default = LoggedIn;
LoggedIn.propTypes = {
  onLogout: _propTypes.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbXBvbmVudHMvTG9nZ2VkSW4uanMiXSwibmFtZXMiOlsiR3JpZCIsInN0eWxlZCIsImRpdiIsIlJvdyIsIkNvbCIsInByb3BzIiwic2l6ZSIsImNvbG9yIiwiRHJvcFNoYWRvd0NvbCIsIkxvZ2dlZEluIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJnbG9iYWwiLCJsb2FkTG9nZ2VkSW5NZW51IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVMb2dvdXQiLCJlIiwib25Mb2dvdXQiLCJ1c2VybmFtZSIsImxvZ2dlZEluIiwicmVuZGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNQSxJQUFJLEdBQUdDLDBCQUFPQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPOztBQVdBLE1BQU1DLEdBQUcsR0FBR0YsMEJBQU9DLEdBQUk7QUFDOUI7QUFDQTtBQUNBLENBSE87O0FBS0EsTUFBTUUsR0FBRyxHQUFHSCwwQkFBT0MsR0FBSTtBQUM5QixVQUFXRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBSztBQUNoQyxzQkFBdUJELEtBQUQsSUFBV0EsS0FBSyxDQUFDRSxLQUFNO0FBQzdDLENBSE87O0FBS0EsTUFBTUMsYUFBYSxHQUFHUCwwQkFBT0MsR0FBSTtBQUN4QyxVQUFXRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBSztBQUNoQyxzQkFBdUJELEtBQUQsSUFBV0EsS0FBSyxDQUFDRSxLQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLENBTk87OztBQVVRLE1BQU1FLFFBQU4sU0FBdUJDLGdCQUF2QixDQUFpQztBQUFBO0FBQUE7O0FBQUEsU0FLOUNDLGlCQUw4QyxHQUsxQixNQUFNO0FBQ3hCQyxNQUFBQSxNQUFNLENBQUNDLGdCQUFQO0FBQ0FDLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxNQUFwQixHQUE2QixDQUE3QjtBQUNBSCxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkUsZUFBcEIsR0FBc0MsU0FBdEM7QUFDRCxLQVQ2Qzs7QUFBQSxTQVc5Q0MsWUFYOEMsR0FXOUJDLENBQUQsSUFBTztBQUNwQixXQUFLZixLQUFMLENBQVdnQixRQUFYLENBQW9CO0FBQ2xCQyxRQUFBQSxRQUFRLEVBQUUsRUFEUTtBQUVsQkMsUUFBQUEsUUFBUSxFQUFFO0FBRlEsT0FBcEI7QUFJRCxLQWhCNkM7QUFBQTs7QUFtQjlDQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw2QkFBQyxJQUFEO0FBQU0sTUFBQSxTQUFTLEVBQUUsS0FBS0w7QUFBdEIsb0JBQ0UsNkJBQUMsR0FBRCxxQkFDRSw2QkFBQyxHQUFEO0FBQUssTUFBQSxJQUFJLEVBQUUsQ0FBWDtBQUFjLE1BQUEsS0FBSyxFQUFDO0FBQXBCLE1BREYsZUFFRSw2QkFBQyxHQUFEO0FBQUssTUFBQSxJQUFJLEVBQUUsR0FBWDtBQUFnQixNQUFBLEtBQUssRUFBQztBQUF0QixNQUZGLGVBR0UsNkJBQUMsR0FBRDtBQUFLLE1BQUEsSUFBSSxFQUFFLEdBQVg7QUFBZ0IsTUFBQSxLQUFLLEVBQUM7QUFBdEIsTUFIRixDQURGLENBREY7QUFTRDs7QUE3QjZDOzs7QUFBM0JWLFEsQ0FDWmdCLFMsR0FBWTtBQUNqQkosRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUMsSUFBVixDQUFlQztBQURSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1lbnVNYW5hZ2VyIGZyb20gJy4uLy4uL3NpbmdsZXRvbnMvbWVudV9tYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIGhlaWdodDogY2FsYygxMDAlIC0gMXB4KTtcclxuIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4gbWFyZ2luOiAwO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTIxMjE7XHJcbiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjEyMTIxO1xyXG4gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjEyMTIxO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBIZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wU2hhZG93Q29sID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTlweCAwcHggIzAwMDAwMDsgXHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxOXB4IDBweCAjMDAwMDAwO1xyXG4gIHotaW5kZXggPSAxMDAwO1xyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZWRJbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uTG9nb3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgZ2xvYmFsLmxvYWRMb2dnZWRJbk1lbnUoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjEyMTIxXCI7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTG9nb3V0ID0gKGUpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25Mb2dvdXQoe1xyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIGxvZ2dlZEluOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBvbktleURvd249e3RoaXMuaGFuZGxlTG9nb3V0fT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzaXplPXsxfSBjb2xvcj1cIiMxYTFhMWFcIi8+XHJcbiAgICAgICAgICA8Q29sIHNpemU9ezEuNX0gY29sb3I9XCIjZjhmOGY4XCIvPlxyXG4gICAgICAgICAgPENvbCBzaXplPXszLjV9IGNvbG9yPVwiI2ZmZmZmZlwiLz5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sImZpbGUiOiJyZW5kZXJlci9jb21wb25lbnRzL0xvZ2dlZEluLmpzIn0=
