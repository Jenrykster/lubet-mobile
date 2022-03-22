import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { NewBetButtons } from './NewBetButtons';
import { NumberGrid } from './NumberGrid';
import { Description } from './styles';

import { GameSelector } from '@components';
import { Colors } from '@constants';
import { BetNavigatorParamList } from '@shared/types';
import { addCartItemAction, RootState } from '@store';

type BetScreenProps = BottomTabScreenProps<BetNavigatorParamList, 'NewBet'>;

export const NewBetScreen = (props: BetScreenProps) => {
  const dispatch = useDispatch();
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
    const isFull = selectedNumbers.length >= selectedGameData!.max_number;
    const randomNumbers = isFull ? [] : [...selectedNumbers];
    for (let i = randomNumbers.length; i < selectedGameData!.max_number; i++) {
      let randomNumber: number;
      do {
        randomNumber =
          Math.round(Math.random() * selectedGameData!.range - 1) + 1;
      } while (
        randomNumbers.includes(randomNumber) ||
        randomNumber === 0 ||
        randomNumber > selectedGameData!.range
      );
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
        } to make a ${selectedGameData?.type} bet`,
        [{ text: 'Ok', style: 'destructive' }]
      );
      return;
    }
    if (selectedGameData && selectedNumbers) {
      dispatch(
        addCartItemAction({
          game: selectedGameData,
          numbers: selectedNumbers,
        })
      );
      clearSelectedNumbers();
    }
  };

  useEffect(() => {
    props.navigation.setOptions({ headerTitle: `New bet for ${selectedGame}` });
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
