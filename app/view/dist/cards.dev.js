"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;

var _banner = _interopRequireDefault(require("../components/banner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var page = 1; //TODO: banner and nav bar bellow the banner and wait animation on it while loading the page

function body() {
  $('.container').empty(); //$('.container').append(banner());

  $('.container').append($(navBar()));
  $('.container').append($('<div class="ui four cards mtgcards"></div>'));
}

function render(data) {
  return regeneratorRuntime.async(function render$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body();
          search();
          typeNavigation();
          home();
          nextPage();
          $('.mtgcards').empty();
          data.cards.forEach(function (event) {
            if (!event.imageUrl) {
              return;
            }

            $(".mtgcards").append(buildCard({
              name: event.name,
              type: event.type,
              text: event.text,
              setName: event.setName,
              manaCost: event.manaCost,
              imageUrl: event.imageUrl,
              id: event.multiverseid
            }));
          });
          cardDetail();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function buildCard(event) {
  return "\n  <div id=\"card\" class=\"card\">\n  <div class=\"image\">\n    <img id=\"".concat(event.id, "\" src=\"").concat(event.imageUrl, "\">\n  </div>\n</div>");
}

function search() {
  var searchValue;
  $('#searchByName').change(function (event) {
    searchValue = event.target.value;
    window.location.hash = '#cardByName/' + searchValue;
  });
} //TODO: hash with /id (#cardDetail/id) I have startswith() method to grab the hash and have access to the hash on the controller


function cardDetail() {
  $('.image').click(function (event) {
    var id = event.target.id;
    window.location.hash = '#cardDetail/' + id;
  });
}

function typeNavigation() {
  $('#menuItem').click(function (event) {
    var type = event.target.id;
    window.location.hash = '#cardType/' + type;
  });
}

function home() {
  $('#home').click(function () {
    page = 1;
    window.location.hash = '#cards';
  });
}

function nextPage() {
  $('#nextPage').click(function () {
    if (page > 311) {
      page = 0;
    }

    page++;
    window.location.hash = '#cards/' + page;
  });
}

function navBar() {
  return "\n  <div id=\"navBar\" class=\"ui secondary menu\">\n  <div class=\"ui compact menu\">\n  <div class=\"ui simple dropdown item\">\n    Types\n    <i class=\"dropdown icon\"></i>\n    <div id=\"menuItem\" class=\"menu\">\n      <div id=\"artifact\" class=\"item\">Artifact</div>\n      <div id=\"conspiracy\" class=\"item\">Conspiracy</div>\n      <div id=\"creature\" class=\"item\">Creature</div>\n      <div id=\"enchantment\" class=\"item\">Enchantment</div>\n      <div id=\"instant\" class=\"item\">Instant</div>\n      <div id=\"land\" class=\"item\">Land</div>\n      <div id=\"phenomenon\" class=\"item\">Phenomenon</div>\n      <div id=\"plane\" class=\"item\">Plane</div>\n      <div id=\"planeswalker\" class=\"item\">Planeswalker</div>\n      <div id=\"scheme\" class=\"item\">Scheme</div>\n      <div id=\"sorcery\" class=\"item\">Sorcery</div>\n      <div id=\"tribal\" class=\"item\">Tribal</div>\n      <div id=\"vanguard\"class=\"item\">Vanguard</div>\n    </div>\n  </div>\n</div>\n  <a id=\"home\" class=\"item\">\n    Home\n  </a>\n  <a id=\"nextPage\" class=\"item\">\n    Next Page\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui icon input\">\n        <input id=\"searchByName\" type=\"text\" placeholder=\"Search by name...\">\n        <i class=\"search link icon\"></i>\n      </div>\n    </div>\n  </div>\n</div>";
}