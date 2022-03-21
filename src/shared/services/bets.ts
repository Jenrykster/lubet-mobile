import { CartItem } from '../types';
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
      return err.message;
    });
};

export const newBet = (token: string, cartGames: CartItem[]) => {
  return api
    .post(
      '/bet/new-bet',
      {
        games: cartGames.map((cartItem) => {
          return {
            game_id: cartItem.game.id,
            numbers: cartItem.choosen_numbers,
          };
        }),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
