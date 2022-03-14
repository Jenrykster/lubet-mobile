import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { Bet } from '../../../shared/types';
import { RootState } from '../../../store';
import { BetCard } from '../BetCard';

export const BetList = (props: { bets: Bet[] }) => {
  const gameTypes = useSelector((state: RootState) => state.games.gameList);

  const renderBet = (itemData: ListRenderItemInfo<Bet>) => {
    const color = gameTypes.find(
      (game) => game.id === itemData.item.type.id
    )?.color;
    return <BetCard bet={itemData.item} color={color || 'black'} />;
  };
  return (
    <FlatList
      data={props.bets}
      renderItem={(itemData) => renderBet(itemData)}
    />
  );
};
