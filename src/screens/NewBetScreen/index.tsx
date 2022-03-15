import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { GameSelector } from '../../components';
import { BetNavigatorParamList } from '../../shared/types';
import { RootState } from '../../store';
import { NumberGrid } from './NumberGrid';
import { Description } from './styles';

type BetScreenProps = BottomTabScreenProps<BetNavigatorParamList, 'NewBet'>;

export const NewBetScreen = (props: BetScreenProps) => {
  const gameTypes = useSelector((state: RootState) => state.games.gameList);
  const [selectedGame, setSelectedGame] = useState([gameTypes[0].type]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const changeSelectedGame = (newSelectedGame: string) => {
    if (selectedGame[0] === newSelectedGame) return;
    setSelectedNumbers([]);
    setSelectedGame([newSelectedGame]);
  };

  const addNumberToSelected = (newNumber: number) => {
    if (selectedNumbers.includes(newNumber)) {
      setSelectedNumbers((prevState) =>
        prevState.filter((number) => number !== newNumber)
      );
    } else {
      setSelectedNumbers((prevState) => prevState.concat(newNumber));
    }
  };

  useEffect(() => {
    props.navigation.setOptions({ title: `New bet for ${selectedGame}` });
  }, [selectedGame]);

  const selectedGameData = gameTypes.find(
    (game) => game.type === selectedGame[0]
  );

  return (
    <View>
      <GameSelector
        gameList={gameTypes}
        selectedGames={selectedGame}
        onElementPress={changeSelectedGame}
      />
      <Description>{selectedGameData?.description}</Description>
      <NumberGrid
        numberRange={selectedGameData!.range}
        selectedNumbers={selectedNumbers}
        selectedNumberColor={selectedGameData?.color || 'black'}
        onNumberPress={addNumberToSelected}
      />
    </View>
  );
};
