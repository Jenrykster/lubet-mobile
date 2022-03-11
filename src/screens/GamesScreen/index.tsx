import React from 'react';
import { Text } from 'react-native';
import { Game } from '../../shared/types';
import { GameSelector } from './GameSelector';

export const GamesScreen = () => {
  const games: Game[] = [
    { name: 'JoãoBet', color: 'red', id: 'game1' },
    { name: 'GrandeNomeBet', color: 'black', id: 'game2' },
    { name: 'JoãoBet', color: 'black', id: 'game3' },
    { name: 'JoãoBet', color: 'black', id: 'game4' },
  ];
  return <GameSelector betList={games} />;
};
