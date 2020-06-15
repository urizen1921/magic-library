"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=render;var _banner=_interopRequireDefault(require("../components/banner.js"));function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}var page=1;function body(){$(".container").empty(),$(".container").append($(navBar())),$(".container").append($('<div class="ui four cards mtgcards"></div>'))}function render(i){return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:body(),search(),typeNavigation(),home(),nextPage(),$(".mtgcards").empty(),i.cards.forEach(function(n){n.imageUrl&&$(".mtgcards").append(buildCard({name:n.name,type:n.type,text:n.text,setName:n.setName,manaCost:n.manaCost,imageUrl:n.imageUrl,id:n.multiverseid}))}),cardDetail();case 8:case"end":return n.stop()}})}function buildCard(n){return'\n  <div id="card" class="card">\n  <div class="image">\n    <img id="'.concat(n.id,'" src="').concat(n.imageUrl,'">\n  </div>\n</div>')}function search(){var i;$("#searchByName").change(function(n){i=n.target.value,window.location.hash="#cardByName/"+i})}function cardDetail(){$(".image").click(function(n){var i=n.target.id;window.location.hash="#cardDetail/"+i})}function typeNavigation(){$("#menuItem").click(function(n){var i=n.target.id;window.location.hash="#cardType/"+i})}function home(){$("#home").click(function(){page=1,window.location.hash="#cards"})}function nextPage(){$("#nextPage").click(function(){311<page&&(page=0),page++,window.location.hash="#cards/"+page})}function navBar(){return'\n  <div id="navBar" class="ui secondary menu">\n  <div class="ui compact menu">\n  <div class="ui simple dropdown item">\n    Types\n    <i class="dropdown icon"></i>\n    <div id="menuItem" class="menu">\n      <div id="artifact" class="item">Artifact</div>\n      <div id="conspiracy" class="item">Conspiracy</div>\n      <div id="creature" class="item">Creature</div>\n      <div id="enchantment" class="item">Enchantment</div>\n      <div id="instant" class="item">Instant</div>\n      <div id="land" class="item">Land</div>\n      <div id="phenomenon" class="item">Phenomenon</div>\n      <div id="plane" class="item">Plane</div>\n      <div id="planeswalker" class="item">Planeswalker</div>\n      <div id="scheme" class="item">Scheme</div>\n      <div id="sorcery" class="item">Sorcery</div>\n      <div id="tribal" class="item">Tribal</div>\n      <div id="vanguard"class="item">Vanguard</div>\n    </div>\n  </div>\n</div>\n  <a id="home" class="item">\n    Home\n  </a>\n  <a id="nextPage" class="item">\n    Next Page\n  </a>\n  <div class="right menu">\n    <div class="item">\n      <div class="ui icon input">\n        <input id="searchByName" type="text" placeholder="Search by name...">\n        <i class="search link icon"></i>\n      </div>\n    </div>\n  </div>\n</div>'}