import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { LayoutAnimation, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BetNavigatorParamList } from '../../shared/types';
import { toRealCurrency } from '../../shared/utils';
import { removeCartItemAction, RootState } from '../../store';
import { CartItemList } from './CartItemList';
import { EmptyCartMessage } from './EmptyCartMessage';
import { SaveCartButton } from './SaveCartButton';
import {
  CartTitle,
  CartTitleBold,
  CartTitlePrice,
  PriceContainer,
  TitleContainer,
} from './styles';

type CartScreenProps = BottomTabScreenProps<BetNavigatorParamList, 'Cart'>;
export const CartScreen = (props: CartScreenProps) => {
  const distpatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const deleteCartItem = (id: number) => {
    distpatch(removeCartItemAction({ itemId: id }));
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  const isEmpty = cartState.cartItems.length === 0;

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

      {!isEmpty && (
        <CartItemList
          cartItems={cartState.cartItems}
          onDeleteButtonPress={deleteCartItem}
        />
      )}
      {isEmpty && (
        <EmptyCartMessage
          onNewBetPress={() => props.navigation.navigate('NewBet')}
        />
      )}
      {!isEmpty && <SaveCartButton />}
    </View>
  );
};
