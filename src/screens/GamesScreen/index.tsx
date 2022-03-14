import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../constants';
import { getBets, getGames } from '../../shared/services';
import { Bet, Game } from '../../shared/types';
import { setGamesAction, RootState } from '../../store';
import { BetList } from './BetList';
import { GameSelector } from './GameSelector';

export const GamesScreen = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.user.token);

  const [isLoading, setIsLoading] = useState(false);
  const [betListScrollOffset, setBetListScrollOffset] = useState(0);

  const [gameList, setGameList] = useState<Game[]>();
  const [selectedGames, setSelectedgames] = useState<string[]>([]);
  const [betList, setBetList] = useState<Bet[]>();

  const saveScrollProgress = (scrollProgress: number) => {
    setBetListScrollOffset(scrollProgress);
  };

  const addSelectedType = (selectedType: string) => {
    if (selectedGames.includes(selectedType)) {
      setSelectedgames((prevState) => {
        return prevState.filter((game) => game !== selectedType);
      });
    } else {
      setSelectedgames((prevState) => prevState.concat(selectedType));
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      const result = await getGames();
      if (result.status === 200) {
        setGameList(result.data.types);
        dispatch(setGamesAction({ games: result.data.types }));
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const fetchBets = async () => {
      setIsLoading(true);
      const result = await getBets(userToken, selectedGames);
      if (result.status === 200) {
        setBetList(result.data);
      }
      setIsLoading(false);
    };

    fetchBets();
  }, [selectedGames]);

  return gameList ? (
    <View>
      <GameSelector
        betList={gameList}
        selectedGames={selectedGames}
        onElementPress={addSelectedType}
      />
      {isLoading && <ActivityIndicator color={Colors.primary} size='large' />}
      {!isLoading && betList && (
        <BetList
          bets={betList}
          onScroll={saveScrollProgress}
          scrollOffset={betListScrollOffset}
        />
      )}
    </View>
  ) : (
    <ActivityIndicator color={Colors.primary} />
  );
};
