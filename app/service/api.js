const MTG_CARDS = 'https://api.magicthegathering.io/v1/cards';

export async function fetchCards(page) {

  let response;

  if(!page) {
    response = await fetch(MTG_CARDS + '?page=1');
  } else {
    response = await fetch(MTG_CARDS + '?page=' + page);

  }

  if(!response && !response.ok) {
    throw new Error("network failure");
  }

  console.log(response);

  let data = await response.json();

  return data;
}

export async function fetchCardsByName(str) {

  let response = await fetch(MTG_CARDS + '?name=' + str);

  if(!response && !response.ok) {
    throw new Error("network failure");
  }

  console.log(response);

  let data = await response.json();

  return data;

}

export async function fetchCardById(id) {

  let response = await fetch(MTG_CARDS + '?multiverseid=' + id);

 if(!response && !response.ok) {
   throw new Error("network failure");
 }

 console.log(response);

 let data = await response.json();

 return data;
}

export async function fetchCardsByType(type) {

  let response = await fetch(MTG_CARDS + '?type=' + type);

  if(!response && !response.ok) {
    throw new Error("network failure");
  }

  console.log(response);

  let data = await response.json();

  return data;
}
    
