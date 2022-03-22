import React from 'react';
import { Dimensions, ListRenderItemInfo } from 'react-native';
import { BetCard } from '@components';
import { CartItem } from '@shared/types';
import {
  BetCardContainer,
  CartItemsListContainer,
  DeleteIcon,
  DeleteIconContainer,
} from './styles';

export const CartItemList = (props: {
  cartItems: CartItem[];
  onDeleteButtonPress: (id: number) => void;
}) => {
  const cartListHeight = Dimensions.get('window').height > 750 ? '65%' : '50%';

  const renderCartItem = (cartItem: ListRenderItemInfo<CartItem>) => {
    return (
      <BetCardContainer>
        <BetCard
          bet={cartItem.item}
          color={cartItem.item.game.color}
          width='80%'
          numOfColumns={6}
          isInsideCart
        />
        <DeleteIconContainer
          activeOpacity={0.8}
          onPress={() => props.onDeleteButtonPress(cartItem.item.id)}
        >
          <DeleteIcon name='md-trash-bin' color='white' size={25} />
        </DeleteIconContainer>
      </BetCardContainer>
    );
  };

  return (
    <CartItemsListContainer
      height={cartListHeight}
      data={props.cartItems}
      renderItem={(itemData) => renderCartItem(itemData)}
    />
  );
};
