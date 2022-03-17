import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const CartItemsListContainer = styled.FlatList`
  height: 70%;
`;

export const BetCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

export const DeleteIconContainer = styled.TouchableOpacity`
  width: 15%;
  margin-left: -10px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f25a41;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const DeleteIcon = styled(Ionicons)``;
