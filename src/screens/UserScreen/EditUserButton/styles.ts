import { Ionicons } from '@expo/vector-icons';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const EditUserButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 30px;
  background-color: ${Colors.primary};
`;

export const EditUserButtonText = styled.Text`
  color: white;
  font-size: 30px;
`;

export const EditUserButtonIcon = styled(Ionicons)``;

export const TouchableContainer = styled(Animated.View)`
  width: 250px;
  height: auto;
  border-radius: 40px;
  background-color: yellow;
  overflow: hidden;
`;
