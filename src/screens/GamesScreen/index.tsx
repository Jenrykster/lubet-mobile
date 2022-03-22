import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../constants';
import { getBets, getGames } from '../../shared/services';
import { Bet, BetNavigatorParamList, Game } from '../../shared/types';
import { setGamesAction, RootState } from '../../store';
import { BetList } from './BetList';
import { GameSelector } from '../../components/GameSelector';
import { NoBetsFound } from './NoBetsFound';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type GamesScreenProps = BottomTabScreenProps<BetNavigatorParamList, 'Games'>;

export const GamesScreen = (props: GamesScreenProps) => {
  const dispatch = useDispatch();
  const lastPurchaseId = useSelector(
    (state: RootState) => state.cart.lastPurchaseId
  );
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
    const showErrorMessage = () => {
      Alert.alert('Sorry', 'There was a network error', [
        { text: 'Try again', onPress: fetchGames },
      ]);
    };
    const fetchGames = async () => {
      const result = await getGames();
      try {
        if (result.status === 200) {
          setGameList(result.data.types);
          dispatch(setGamesAction({ games: result.data.types }));
        } else {
          showErrorMessage();
        }
      } catch (err) {
        showErrorMessage();
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const fetchBets = async () => {
      setIsLoading(true);
      const result = await getBets(selectedGames);
      if (result.status === 200) {
        setBetList(result.data);
      }
      setIsLoading(false);
    };

    fetchBets();
  }, [selectedGames, lastPurchaseId]);

  const betListContent =
    betList && betList.length > 0 ? (
      <BetList
        bets={betList}
        onScroll={saveScrollProgress}
        scrollOffset={betListScrollOffset}
      />
    ) : (
      <NoBetsFound />
    );

  return gameList ? (
    <View>
      <GameSelector
        gameList={gameList}
        selectedGames={selectedGames}
        onElementPress={addSelectedType}
      />
      {isLoading && <ActivityIndicator color={Colors.primary} size='large' />}
      {!isLoading && betList && betListContent}
    </View>
  ) : (
    <ActivityIndicator color={Colors.primary} />
  );
};
