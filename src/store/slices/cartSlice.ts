import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Game } from '../../shared/types';

export interface CartState {
  cartItems: CartItem[];
  currentId: number;
  cartTotal: number;
}

const initialState: CartState = {
  cartItems: [],
  currentId: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addCartItemAction: (
      state,
      action: PayloadAction<{ numbers: number[]; game: Game }>
    ) => {
      state.currentId += 1;
      state.cartItems.push({
        id: state.currentId,
        game: action.payload.game,
        choosen_numbers: action.payload.numbers.sort((a, b) => a - b),
        price: action.payload.game.price,
      });
      state.cartTotal += action.payload.game.price;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItemAction } = cartSlice.actions;

export default cartSlice.reducer;
