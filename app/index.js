import * as routes from './routes.js';

function route() {
  const windowHash = window.location.hash;

  let route = Object.values(routes).find(({hash}) =>
      windowHash.startsWith(hash)
  );

  if (!route) {
    route = routes.cards;
  }


  route.init();

}

window.onhashchange = route;
route();