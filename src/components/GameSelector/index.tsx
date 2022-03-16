import React from 'react';
import { ScrollView } from 'react-native';
import { Game } from '../../shared/types';
import {
  GameElementContainer,
  GameElementTitle,
  GameSelectorContainer,
} from './styles';

const GameElement = (props: {
  game: Game;
  active: boolean;
  onElementPress: (pressedType: string) => void;
}) => {
  return (
    <GameElementContainer
      active={props.active}
      color={props.game.color}
      activeOpacity={0.5}
      onPress={() => props.onElementPress(props.game.type)}
    >
      <GameElementTitle active={props.active} color={props.game.color}>
        {props.game.type}
      </GameElementTitle>
    </GameElementContainer>
  );
};

export const GameSelector = (props: {
  gameList: Game[];
  selectedGames: string[];
  onElementPress: (pressedType: string) => void;
}) => {
  const renderGames = (gameList: Game[]) => {
    return gameList.map((game) => {
      return (
        <GameElement
          game={game}
          key={game.id}
          active={props.selectedGames.includes(game.type)}
          onElementPress={props.onElementPress}
        />
      );
    });
  };
  return (
    <GameSelectorContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderGames(props.gameList)}
      </ScrollView>
    </GameSelectorContainer>
  );
};
