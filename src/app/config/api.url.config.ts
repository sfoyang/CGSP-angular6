/*const BASE = 'http://localhost';*/
const BASE = 'http://142.44.162.120';
const PORT = 8080;
const PATH = '/sgsp4';
/*const PATH = '/api';*/

export const API_URLS = {
  PRODUITS_URL: BASE + ':' + PORT + PATH + '/api/produit',
  USER_CRUD_URL: BASE + ':' + PORT + PATH + '/crud_user',
  USER_URL: BASE + ':' + PORT + PATH + '/api/user'
};
