import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const BetCardContainer = styled.TouchableOpacity<{
  color: string;
  width?: string;
  isInsideCart: boolean;
}>`
  background-color: ${(props) => props.color};
  padding: 20px;
  margin: 10px;
  height: ${(props) => (props.isInsideCart ? '100%' : 'auto')};
  border-radius: 20px;
  border-top-right-radius: ${(props) => (props.isInsideCart ? '0px' : '20px')};
  border-bottom-right-radius: ${(props) =>
    props.isInsideCart ? '0px' : '20px'};
  overflow: hidden;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export const BetCardDataContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
  align-items: center;
`;

export const NumberContainer = styled.View`
  background-color: white;
  justify-content: center;

  width: 40px;
  height: 40px;
  align-items: center;
  margin: 2px;
`;

export const NumberTextStyle = styled.Text`
  color: black;
  padding: 10px;
`;

export const TitleText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  margin-top: 10px;
  align-items: center;
  margin-left: auto;
  width: 30%;
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  padding: 10px;
`;

export const NumberList = styled.FlatList<{ height: string }>`
  height: ${(props) => props.height};
` as unknown as typeof FlatList;
