import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Game } from '@types';

export interface CartState {
  cartItems: CartItem[];
  currentId: number;
  cartTotal: number;
  lastPurchaseId: number;
}

const initialState: CartState = {
  cartItems: [],
  currentId: 0,
  cartTotal: 0,
  lastPurchaseId: 0,
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
    removeCartItemAction: (
      state,
      action: PayloadAction<{ itemId: number }>
    ) => {
      state.cartTotal -=
        state.cartItems.find((item) => item.id === action.payload.itemId)
          ?.price || 0;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.itemId
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.currentId = 0;
      state.cartTotal = 0;
      state.lastPurchaseId += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItemAction, removeCartItemAction, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
