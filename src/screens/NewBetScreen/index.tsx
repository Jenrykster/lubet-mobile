import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { GameSelector } from '../../components';
import { Colors } from '../../constants';
import { BetNavigatorParamList } from '../../shared/types';
import { RootState } from '../../store';
import { NewBetButtons } from './NewBetButtons';
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
      if (selectedNumbers.length === selectedGameData?.max_number) {
        Alert.alert(
          'Maximum numbers',
          'The maximum amount of numbers for this game is ' +
            selectedGameData.max_number,
          [{ text: 'Ok', style: 'destructive' }]
        );
        return;
      }
      setSelectedNumbers((prevState) => prevState.concat(newNumber));
    }
  };

  const selectedGameData = gameTypes.find(
    (game) => game.type === selectedGame[0]
  );

  const clearSelectedNumbers = () => {
    setSelectedNumbers([]);
  };

  const completeBet = () => {
    const randomNumbers: number[] = [];
    for (let i = 1; i < selectedGameData!.max_number + 1; i++) {
      let randomNumber: number;
      do {
        randomNumber =
          Math.round(Math.random() * selectedGameData!.range - 1) + 1;
      } while (randomNumbers.includes(randomNumber));
      randomNumbers.push(randomNumber);
    }
    setSelectedNumbers(randomNumbers);
  };

  const addNumbersToCart = () => {
    if (selectedNumbers.length < selectedGameData!.max_number) {
      const diff = selectedGameData!.max_number - selectedNumbers.length;
      Alert.alert(
        'Not enough numbers',
        `You need to add ${diff} more ${
          diff > 1 ? 'numbers' : 'number'
        } to make a bet`,
        [{ text: 'Ok', style: 'destructive' }]
      );
      return;
    }
  };

  useEffect(() => {
    props.navigation.setOptions({ title: `New bet for ${selectedGame}` });
  }, [selectedGame]);

  return (
    <View>
      <GameSelector
        gameList={gameTypes}
        selectedGames={selectedGame}
        onElementPress={changeSelectedGame}
      />
      <Description borderColor={selectedGameData?.color || Colors.primary}>
        {selectedGameData?.description}
      </Description>
      <NumberGrid
        numberRange={selectedGameData!.range}
        selectedNumbers={selectedNumbers}
        selectedNumberColor={selectedGameData?.color || 'black'}
        onNumberPress={addNumberToSelected}
      />
      <NewBetButtons
        onAddToCartButtonPressed={addNumbersToCart}
        onClearButtonPressed={clearSelectedNumbers}
        onCompleteButtonPressed={completeBet}
      />
    </View>
  );
};
