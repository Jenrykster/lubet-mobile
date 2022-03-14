export type Game = {
  color: string;
  description: string;
  id: number;
  max_number: number;
  type: string;
  price: number;
  range: number;
};

export type Bet = {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: string;
  type: BetType;
};

export interface BetType {
  id: number;
  type: string;
}
