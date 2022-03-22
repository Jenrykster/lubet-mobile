import { CartItem } from '@types';
import api from './api';

export const getBets = (selectedGames: string[]) => {
  return api
    .get('/bet/all-bets', {
      params: { 'type[]': selectedGames },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.message;
    });
};

export const newBet = (cartGames: CartItem[]) => {
  return api
    .post('/bet/new-bet', {
      games: cartGames.map((cartItem) => {
        return {
          game_id: cartItem.game.id,
          numbers: cartItem.choosen_numbers,
        };
      }),
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
