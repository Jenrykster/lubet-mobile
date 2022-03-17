import { Ionicons } from '@expo/vector-icons';
import React, { cloneElement } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { BetCard } from '../../../components/BetCard';
import { CartItem } from '../../../shared/types';
import {
  BetCardContainer,
  CartItemsListContainer,
  DeleteIcon,
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
        <DeleteIconContainer activeOpacity={0.8}>
          <DeleteIcon name='md-trash-bin' color='white' size={25} />
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
