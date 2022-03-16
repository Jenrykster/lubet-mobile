import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
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
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <View>
      <TitleContainer>
        <CartTitle>
          <CartTitleBold>CART</CartTitleBold> TOTAL:{' '}
        </CartTitle>
        <PriceContainer>
          <CartTitlePrice>R$ 47,00</CartTitlePrice>
        </PriceContainer>
      </TitleContainer>

      <CartItemList cartItems={cartItems} />
    </View>
  );
};
