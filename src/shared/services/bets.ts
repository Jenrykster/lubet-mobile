import api from './api';

export const getBets = (token: string, selectedGames: string[]) => {
  return api
    .get('/bet/all-bets', {
      headers: { Authorization: `Bearer ${token}` },
      params: { 'type[]': selectedGames },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.message;
    });
};
