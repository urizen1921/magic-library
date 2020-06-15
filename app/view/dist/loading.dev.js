"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderLoading;

var _banner = _interopRequireDefault(require("../components/banner.js"));

var _loadMessage = _interopRequireDefault(require("../components/loadMessage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderLoading() {
  return regeneratorRuntime.async(function renderLoading$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          $('.container').empty().append((0, _banner["default"])()).append((0, _loadMessage["default"])());

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}