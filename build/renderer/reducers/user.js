"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = require("redux-actions");

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reduxActions.handleActions)({
  [_user.default.login]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  },
  [_user.default.logout]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  }
}, {});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImxvZ2luIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZSxpQ0FDYjtBQUNFLEdBQUNBLGNBQVFDLEtBQVQsR0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2xDLFdBQU8sRUFBRSxHQUFHRCxLQUFMO0FBQVksU0FBR0MsTUFBTSxDQUFDQztBQUF0QixLQUFQO0FBQ0QsR0FISDtBQUlFLEdBQUNKLGNBQVFLLE1BQVQsR0FBa0IsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ25DLFdBQU8sRUFBRSxHQUFHRCxLQUFMO0FBQVksU0FBR0MsTUFBTSxDQUFDQztBQUF0QixLQUFQO0FBQ0Q7QUFOSCxDQURhLEVBU2IsRUFUYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyhcclxuICB7XHJcbiAgICBbYWN0aW9ucy5sb2dpbl06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICAgIFthY3Rpb25zLmxvZ291dF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHt9LFxyXG4pO1xyXG4iXSwiZmlsZSI6InJlbmRlcmVyL3JlZHVjZXJzL3VzZXIuanMifQ==
