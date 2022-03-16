import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Bet } from '../../../shared/types';
import { RootState } from '../../../store';
import { BetCard } from '../../../components/BetCard';
import { BetListContainer } from './styles';

export const BetList = (props: {
  bets: Bet[];
  onScroll: (yOffset: number) => void;
  scrollOffset: number;
}) => {
  const gameTypes = useSelector((state: RootState) => state.games.gameList);
  const ScrollRef = useRef<FlatList>(null);

  const renderBet = (itemData: ListRenderItemInfo<Bet>) => {
    const color = gameTypes.find(
      (game) => game.id === itemData.item.type.id
    )?.color;
    return <BetCard bet={itemData.item} color={color || 'black'} />;
  };

  const saveScrollProgress = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    props.onScroll(event.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    ScrollRef.current?.scrollToOffset({ offset: props.scrollOffset || 0 });
  }, [props.bets]);
  return (
    <BetListContainer
      onScroll={saveScrollProgress}
      scrollEventThrottle={200}
      data={props.bets}
      renderItem={(itemData) => renderBet(itemData)}
      ref={ScrollRef}
    />
  );
};
