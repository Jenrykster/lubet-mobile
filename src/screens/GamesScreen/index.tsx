import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../constants';
import { getBets, getGames } from '../../shared/services';
import { Bet, Game } from '../../shared/types';
import { setGamesAction, RootState } from '../../store';
import { BetCard } from './BetCard';
import { BetList } from './BetList';
import { GameSelector } from './GameSelector';

export const GamesScreen = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.user.token);

  const [gameList, setGameList] = useState<Game[]>();
  const [betList, setBetList] = useState<Bet[]>();

  useEffect(() => {
    const fetchGames = async () => {
      const result = await getGames();
      if (result.status === 200) {
        setGameList(result.data.types);
        dispatch(setGamesAction({ games: result.data.types }));
      }
    };
    const fetchBets = async () => {
      const result = await getBets(userToken);
      if (result.status === 200) {
        setBetList(result.data);
      }
    };

    fetchGames();
    fetchBets();
  }, []);

  return gameList && betList ? (
    <View>
      <GameSelector betList={gameList} />
      <BetList bets={betList} />
    </View>
  ) : (
    <ActivityIndicator color={Colors.primary} />
  );
};
