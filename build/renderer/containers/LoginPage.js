"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _redux = require("redux");

var _Login = _interopRequireDefault(require("../components/Login"));

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user.default, dispatch);
  return {
    onLogin: data => {
      user.login(data);
      dispatch((0, _connectedReactRouter.push)('/loggedin'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login.default);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbnRhaW5lcnMvTG9naW5QYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIiwidXNlckFjdGlvbnMiLCJvbkxvZ2luIiwiZGF0YSIsImxvZ2luIiwiTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFNBQU9BLEtBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDdkMsUUFBTUMsSUFBSSxHQUFHLCtCQUFtQkMsYUFBbkIsRUFBZ0NGLFFBQWhDLENBQWI7QUFDQSxTQUFPO0FBQ0xHLElBQUFBLE9BQU8sRUFBR0MsSUFBRCxJQUFVO0FBQ2pCSCxNQUFBQSxJQUFJLENBQUNJLEtBQUwsQ0FBV0QsSUFBWDtBQUNBSixNQUFBQSxRQUFRLENBQUMsZ0NBQUssV0FBTCxDQUFELENBQVI7QUFDRDtBQUpJLEdBQVA7QUFNRCxDQVJEOztlQVVlLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNPLGNBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nO1xyXG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMsIGRpc3BhdGNoKTtcclxuICByZXR1cm4ge1xyXG4gICAgb25Mb2dpbjogKGRhdGEpID0+IHtcclxuICAgICAgdXNlci5sb2dpbihkYXRhKTtcclxuICAgICAgZGlzcGF0Y2gocHVzaCgnL2xvZ2dlZGluJykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pO1xyXG4iXSwiZmlsZSI6InJlbmRlcmVyL2NvbnRhaW5lcnMvTG9naW5QYWdlLmpzIn0=
