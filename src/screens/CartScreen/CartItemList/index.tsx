import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { BetCard } from '../../../components/BetCard';
import { CartItem } from '../../../shared/types';
import { CartItemsListContainer } from './styles';

export const CartItemList = (props: { cartItems: CartItem[] }) => {
  const renderCartItem = (cartItem: ListRenderItemInfo<CartItem>) => {
    return <BetCard bet={cartItem.item} color={cartItem.item.game.color} />;
  };

  return (
    <CartItemsListContainer
      data={props.cartItems}
      renderItem={(itemData) => renderCartItem(itemData)}
    />
  );
};
