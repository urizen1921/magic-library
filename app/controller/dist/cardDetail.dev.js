"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _api = require("../service/api.js");

var _cardDetail = _interopRequireDefault(require("../view/cardDetail.js"));

var _loading = _interopRequireDefault(require("../view/loading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init() {
  var id, data;
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _loading["default"])();
          id = window.location.hash.split('/')[1];
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _api.fetchCardById)(id));

        case 4:
          data = _context.sent;
          (0, _cardDetail["default"])(data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}