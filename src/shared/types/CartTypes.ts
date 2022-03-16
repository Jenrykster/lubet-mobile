import { Game } from '.';

export type CartItem = {
  id: number;
  choosen_numbers: number[];
  game: Game;
  price: number;
};
