import banner from '../components/banner.js';
import loading from '../components/loadMessage.js';

export default async function renderLoading() {

  $('.container').empty()
                 .append(banner())
                 .append(loading());

}