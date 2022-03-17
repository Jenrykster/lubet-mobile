import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { toRealCurrency } from '../../shared/utils';
import { RootState } from '../../store';
import { CartItemList } from './CartItemList';
import {
  CartTitle,
  CartTitleBold,
  CartTitlePrice,
  PriceContainer,
  TitleContainer,
} from './styles';

export const CartScreen = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  return (
    <View>
      <TitleContainer>
        <CartTitle>
          <CartTitleBold>CART</CartTitleBold> TOTAL:{' '}
        </CartTitle>
        <PriceContainer>
          <CartTitlePrice>{toRealCurrency(cartState.cartTotal)}</CartTitlePrice>
        </PriceContainer>
      </TitleContainer>

      <CartItemList cartItems={cartState.cartItems} />
    </View>
  );
};
