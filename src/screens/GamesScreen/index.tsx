import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../constants';
import { getGames } from '../../shared/services';
import { Game } from '../../shared/types';
import { setGamesAction } from '../../store';
import { GameSelector } from './GameSelector';

export const GamesScreen = () => {
  const dispatch = useDispatch();
  const [gameList, setGameList] = useState<Game[]>();

  useEffect(() => {
    const fetchGames = async () => {
      const result = await getGames();
      if (result.status === 200) {
        setGameList(result.data.types);
        dispatch(setGamesAction(result.data.types));
      }
    };

    fetchGames();
  }, []);

  return gameList ? (
    <GameSelector betList={gameList} />
  ) : (
    <ActivityIndicator color={Colors.primary} />
  );
};
