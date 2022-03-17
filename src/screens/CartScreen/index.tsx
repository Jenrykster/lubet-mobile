import React from 'react';
import { LayoutAnimation, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toRealCurrency } from '../../shared/utils';
import { removeCartItemAction, RootState } from '../../store';
import { CartItemList } from './CartItemList';
import { SaveCartButton } from './SaveCartButton';
import {
  CartTitle,
  CartTitleBold,
  CartTitlePrice,
  PriceContainer,
  TitleContainer,
} from './styles';

export const CartScreen = () => {
  const distpatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const deleteCartItem = (id: number) => {
    distpatch(removeCartItemAction({ itemId: id }));
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

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

      <CartItemList
        cartItems={cartState.cartItems}
        onDeleteButtonPress={deleteCartItem}
      />
      <SaveCartButton />
    </View>
  );
};
