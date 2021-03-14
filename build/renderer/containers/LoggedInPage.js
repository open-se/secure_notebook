"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _redux = require("redux");

var _LoggedIn = _interopRequireDefault(require("../components/LoggedIn"));

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user.default, dispatch);
  return {
    onLogout: data => {
      user.logout(data);
      dispatch((0, _connectedReactRouter.push)('/'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoggedIn.default);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbnRhaW5lcnMvTG9nZ2VkSW5QYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIiwidXNlckFjdGlvbnMiLCJvbkxvZ291dCIsImRhdGEiLCJsb2dvdXQiLCJMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDakMsU0FBT0EsS0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUN2QyxRQUFNQyxJQUFJLEdBQUcsK0JBQW1CQyxhQUFuQixFQUFnQ0YsUUFBaEMsQ0FBYjtBQUNBLFNBQU87QUFDTEcsSUFBQUEsUUFBUSxFQUFHQyxJQUFELElBQVU7QUFDbEJILE1BQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZRCxJQUFaO0FBQ0FKLE1BQUFBLFFBQVEsQ0FBQyxnQ0FBSyxHQUFMLENBQUQsQ0FBUjtBQUNEO0FBSkksR0FBUDtBQU1ELENBUkQ7O2VBVWUseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q08saUJBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IExvZ2dlZEluIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nZ2VkSW4nO1xyXG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMsIGRpc3BhdGNoKTtcclxuICByZXR1cm4ge1xyXG4gICAgb25Mb2dvdXQ6IChkYXRhKSA9PiB7XHJcbiAgICAgIHVzZXIubG9nb3V0KGRhdGEpO1xyXG4gICAgICBkaXNwYXRjaChwdXNoKCcvJykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9nZ2VkSW4pO1xyXG4iXSwiZmlsZSI6InJlbmRlcmVyL2NvbnRhaW5lcnMvTG9nZ2VkSW5QYWdlLmpzIn0=
