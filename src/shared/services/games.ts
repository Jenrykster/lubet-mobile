import api from './api';

export const getGames = () => {
  return api
    .get('/cart_games')
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.message;
    });
};
