import api from './api';

export const getBets = (token: string) => {
  console.log(token);
  return api
    .get('/bet/all-bets', { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.message;
    });
};
