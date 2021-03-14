"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _LoginPage = _interopRequireDefault(require("./containers/LoginPage"));

var _LoggedInPage = _interopRequireDefault(require("./containers/LoggedInPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = /*#__PURE__*/_react.default.createElement(_reactRouter.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  exact: true,
  path: "/",
  component: _LoginPage.default
}), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  exact: true,
  path: "/loggedin",
  component: _LoggedInPage.default
}));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJMb2dpblBhZ2UiLCJMb2dnZWRJblBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs0QkFHRSw2QkFBQyxtQkFBRCxxQkFDRSw2QkFBQyxrQkFBRDtBQUFPLEVBQUEsS0FBSyxNQUFaO0FBQWEsRUFBQSxJQUFJLEVBQUMsR0FBbEI7QUFBc0IsRUFBQSxTQUFTLEVBQUVBO0FBQWpDLEVBREYsZUFFRSw2QkFBQyxrQkFBRDtBQUFPLEVBQUEsS0FBSyxNQUFaO0FBQWEsRUFBQSxJQUFJLEVBQUMsV0FBbEI7QUFBOEIsRUFBQSxTQUFTLEVBQUVDO0FBQXpDLEVBRkYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL2NvbnRhaW5lcnMvTG9naW5QYWdlJztcclxuaW1wb3J0IExvZ2dlZEluUGFnZSBmcm9tICcuL2NvbnRhaW5lcnMvTG9nZ2VkSW5QYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8U3dpdGNoPlxyXG4gICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dnZWRpblwiIGNvbXBvbmVudD17TG9nZ2VkSW5QYWdlfSAvPlxyXG4gIDwvU3dpdGNoPlxyXG4pO1xyXG4iXSwiZmlsZSI6InJlbmRlcmVyL3JvdXRlcy5qcyJ9
