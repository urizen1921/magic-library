"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCards = fetchCards;
exports.fetchCardsByName = fetchCardsByName;
exports.fetchCardById = fetchCardById;
exports.fetchCardsByType = fetchCardsByType;
var MTG_CARDS = 'https://api.magicthegathering.io/v1/cards';

function fetchCards(page) {
  var response, data;
  return regeneratorRuntime.async(function fetchCards$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (page) {
            _context.next = 6;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(MTG_CARDS + '?page=1'));

        case 3:
          response = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch(MTG_CARDS + '?page=' + page));

        case 8:
          response = _context.sent;

        case 9:
          if (!(!response && !response.ok)) {
            _context.next = 11;
            break;
          }

          throw new Error("network failure");

        case 11:
          console.log(response);
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

function fetchCardsByName(str) {
  var response, data;
  return regeneratorRuntime.async(function fetchCardsByName$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(MTG_CARDS + '?name=' + str));

        case 2:
          response = _context2.sent;

          if (!(!response && !response.ok)) {
            _context2.next = 5;
            break;
          }

          throw new Error("network failure");

        case 5:
          console.log(response);
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function fetchCardById(id) {
  var response, data;
  return regeneratorRuntime.async(function fetchCardById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch(MTG_CARDS + '?multiverseid=' + id));

        case 2:
          response = _context3.sent;

          if (!(!response && !response.ok)) {
            _context3.next = 5;
            break;
          }

          throw new Error("network failure");

        case 5:
          console.log(response);
          _context3.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function fetchCardsByType(type) {
  var response, data;
  return regeneratorRuntime.async(function fetchCardsByType$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch(MTG_CARDS + '?type=' + type));

        case 2:
          response = _context4.sent;

          if (!(!response && !response.ok)) {
            _context4.next = 5;
            break;
          }

          throw new Error("network failure");

        case 5:
          console.log(response);
          _context4.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context4.sent;
          return _context4.abrupt("return", data);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  });
}