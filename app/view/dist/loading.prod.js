"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=renderLoading;var _banner=_interopRequireDefault(require("../components/banner.js")),_loadMessage=_interopRequireDefault(require("../components/loadMessage.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function renderLoading(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:$(".container").empty().append((0,_banner.default)()).append((0,_loadMessage.default)());case 1:case"end":return e.stop()}})}