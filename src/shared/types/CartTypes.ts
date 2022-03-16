import { Game } from '.';

export type CartItem = {
  id: number;
  numbers: number[];
  game: Game;
  price: number;
};
