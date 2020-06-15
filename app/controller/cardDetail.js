import { fetchCardById } from '../service/api.js';
import cardDetail from '../view/cardDetail.js';
import renderLoading from '../view/loading.js';

export default async function init() {

    
  renderLoading();

  let id = window.location.hash.split('/')[1];

  const data = await fetchCardById(id);

  cardDetail(data);
}
