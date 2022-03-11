import React from 'react';
import { ScrollView, View } from 'react-native';
import { Game } from '../../../shared/types';
import {
  GameElementContainer,
  GameElementTitle,
  GameSelectorContainer,
} from './styles';

const GameElement = (props: { game: Game; active: boolean }) => {
  return (
    <GameElementContainer active={props.active} color={props.game.color}>
      <GameElementTitle active={props.active} color={props.game.color}>
        {props.game.name}
      </GameElementTitle>
    </GameElementContainer>
  );
};

export const GameSelector = (props: { betList: Game[] }) => {
  const renderGames = (gameList: Game[]) => {
    return gameList.map((game) => {
      return <GameElement game={game} key={game.id} active={true} />;
    });
  };
  return (
    <GameSelectorContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderGames(props.betList)}
      </ScrollView>
    </GameSelectorContainer>
  );
};
