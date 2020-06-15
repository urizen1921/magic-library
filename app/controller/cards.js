import { fetchCards } from '../service/api.js';
import cardsView from '../view/cards.js';
import renderLoading from '../view/loading.js';


export default async function init() {

    renderLoading();

    let page = window.location.hash.split('/')[1];

    const data = await fetchCards(page);

    console.log(data);

    cardsView(data);
}
