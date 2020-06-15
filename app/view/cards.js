
import banner from '../components/banner.js';

var page = 1;


//TODO: banner and nav bar bellow the banner and wait animation on it while loading the page
function body() {
  $('.container').empty();

  //$('.container').append(banner());
  $('.container').append($(navBar()));
  $('.container').append($('<div class="ui four cards mtgcards"></div>'));
}

export default async function render(data) {

  body();
  search();
  typeNavigation();
  home();
  nextPage();


  $('.mtgcards').empty();

  data.cards.forEach((event) => {
    if(!event.imageUrl) {
      return;
    }
    $(".mtgcards").append(
      buildCard({
        name: event.name,
        type: event.type,
        text: event.text,
        setName: event.setName,
        manaCost: event.manaCost,
        imageUrl: event.imageUrl,
        id: event.multiverseid
      })
    );
  });

  cardDetail();
}

function buildCard(event) {
  return `
  <div id="card" class="card">
  <div class="image">
    <img id="${event.id}" src="${event.imageUrl}">
  </div>
</div>`;
}

function search() {

  let searchValue;

  $('#searchByName').change((event) => {
    searchValue = event.target.value;
    window.location.hash = '#cardByName/' + searchValue;
  });
}


//TODO: hash with /id (#cardDetail/id) I have startswith() method to grab the hash and have access to the hash on the controller
function cardDetail() {

  $('.image').click((event) => {
    let id = event.target.id;
    window.location.hash = '#cardDetail/' + id;
  });
}

function typeNavigation() {

  $('#menuItem').click((event) => {
    let type = event.target.id;
    window.location.hash = '#cardType/' + type;
  });
}

function home() {
  $('#home').click(() => {
    page = 1;
    window.location.hash = '#cards';
  });
}

function nextPage() {
  $('#nextPage').click(() => {
    if(page > 311) {
      page = 0;
    }
    page++;
    window.location.hash = '#cards/' + page;
  });
}

function navBar() {
  return `
  <div id="navBar" class="ui secondary menu">
  <div class="ui compact menu">
  <div class="ui simple dropdown item">
    Types
    <i class="dropdown icon"></i>
    <div id="menuItem" class="menu">
      <div id="artifact" class="item">Artifact</div>
      <div id="conspiracy" class="item">Conspiracy</div>
      <div id="creature" class="item">Creature</div>
      <div id="enchantment" class="item">Enchantment</div>
      <div id="instant" class="item">Instant</div>
      <div id="land" class="item">Land</div>
      <div id="phenomenon" class="item">Phenomenon</div>
      <div id="plane" class="item">Plane</div>
      <div id="planeswalker" class="item">Planeswalker</div>
      <div id="scheme" class="item">Scheme</div>
      <div id="sorcery" class="item">Sorcery</div>
      <div id="tribal" class="item">Tribal</div>
      <div id="vanguard"class="item">Vanguard</div>
    </div>
  </div>
</div>
  <a id="home" class="item">
    Home
  </a>
  <a id="nextPage" class="item">
    Next Page
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input id="searchByName" type="text" placeholder="Search by name...">
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>`
}

