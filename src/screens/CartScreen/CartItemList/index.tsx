import { Ionicons } from '@expo/vector-icons';
import React, { cloneElement } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { BetCard } from '../../../components/BetCard';
import { CartItem } from '../../../shared/types';
import {
  BetCardContainer,
  CartItemsListContainer,
  DeleteIconContainer,
} from './styles';

export const CartItemList = (props: { cartItems: CartItem[] }) => {
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
        <DeleteIconContainer>
          <Ionicons name='md-trash-bin' color='white' size={25} />
        </DeleteIconContainer>
      </BetCardContainer>
    );
  };

  return (
    <CartItemsListContainer
      data={props.cartItems}
      renderItem={(itemData) => renderCartItem(itemData)}
    />
  );
};
