//TODO: build the object here and call both function as arguments of the append. I might need this object several times
export default async function render(data) {

    $('.container').empty().append($('<div class="ui centered card mtgcard"></div>'));
    $('.container').append($('<div><table class="ui selectable inverted table"></table></div>'));
    $('.container').append($('<div><button id="back-btn">Back</button></div>'));

    backButton();

    data.cards.forEach((event) => {
    if(!event.imageUrl) {
      return;
    }
    $(".mtgcard").append(
      buildCard({
        name: event.name,
        type: event.type,
        text: event.text,
        setName: event.setName,
        manaCost: event.manaCost,
        imageUrl: event.imageUrl,
        legalities: event.legalities,
        artist: event.artist,
        id: event.multiverseid
      })
    );

    $(".table").append(
      buildTable({
        name: event.name,
        type: event.type,
        text: event.text,
        setName: event.setName,
        manaCost: event.manaCost,
        imageUrl: event.imageUrl,
        legalities: event.legalities,
        artist: event.artist,
        id: event.multiverseid,
        rarity: event.rarity
      })
    );
  });
}

//TODO: use jquery in the return (ex: $('<tbody>').append()...)
function buildCard(event) {
    return `
        <div class="image">
            <img src="${event.imageUrl}">
        </div>
        <div class="content">
            <a class="header">${event.name}</a>
        </div>`;
        
}

//TODO: use jquery in the return (ex: $('<tbody>').append()...)
function buildTable(event) {
    return `
  <tbody>
    <tr>
      <td>Name</td>
      <td>${event.name}</td>
    </tr>
    <tr>
      <td>Set</td>
      <td>${event.setName}</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>${event.type}</td>
    </tr>
    <tr>
      <td>Mana Cost</td>
      <td>${event.manaCost}</td>
    </tr>
    <tr>
      <td>Artist</td>
      <td>${event.artist}</td>
    </tr>
    <tr>
      <td>Rarity</td>
      <td>${event.rarity}</td>
    </tr>
    <tr>
      <td>Multiverse Id</td>
      <td>${event.id}</td>
    </tr>
  </tbody>`;
}

function backButton() {

  $('#back-btn').click(() => {
    window.history.back();
  }); 
}