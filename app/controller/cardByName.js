import { fetchCardsByName } from '../service/api.js';
import cardsView from '../view/cards.js';
import renderLoading from '../view/loading.js';


export default async function init() {

    renderLoading();

    let search = window.location.hash.split('/')[1];

    const data = await fetchCardsByName(search);

    cardsView(data);

}

