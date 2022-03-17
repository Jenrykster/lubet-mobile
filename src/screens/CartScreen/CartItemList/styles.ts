import styled from 'styled-components/native';

export const CartItemsListContainer = styled.FlatList`
  height: 70%;
`;

export const BetCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: yellow;
  margin: 10px 0px;
`;

export const DeleteIconContainer = styled.TouchableOpacity`
  align-items: center;
  height: 100%;
  margin-left: -10px;
  width: 50px;
  background-color: red;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
