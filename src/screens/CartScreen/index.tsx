import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Alert, LayoutAnimation, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newBet } from '../../shared/services';
import { BetNavigatorParamList } from '../../shared/types';
import { toRealCurrency } from '../../shared/utils';
import { clearCart, removeCartItemAction, RootState } from '../../store';
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
  const [isLoading, setIsLoading] = useState(false);

  const distpatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const deleteCartItem = (id: number) => {
    Alert.alert('Are you sure', 'Do you really want to delete this bet ?', [
      { text: 'No', style: 'destructive' },
      {
        text: 'Yes',
        onPress: () => {
          distpatch(removeCartItemAction({ itemId: id }));
          LayoutAnimation.configureNext(layoutAnimConfig);
        },
      },
    ]);
  };

  const saveCart = async () => {
    setIsLoading(true);
    let result;
    try {
      result = await newBet(cartState.cartItems);
      if (result.status === 200) {
        distpatch(clearCart());
        Alert.alert('Success', 'Your cart items were saved successfully :)');
      } else {
        Alert.alert('Error', result.response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
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
      {!isEmpty && <SaveCartButton onSaveCartButtonPress={saveCart} />}
    </View>
  );
};
