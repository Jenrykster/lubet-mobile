import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Game } from '../../shared/types';

export interface CartState {
  cartItems: CartItem[];
  currentId: number;
}

const initialState: CartState = {
  cartItems: [],
  currentId: 0,
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
        numbers: action.payload.numbers,
        price: action.payload.game.price,
      });
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItemAction } = cartSlice.actions;

export default cartSlice.reducer;
