import styled from 'styled-components/native';

export const BetCardContainer = styled.TouchableOpacity<{
  height: string;
  color: string;
}>`
  background-color: ${(props) => props.color};
  padding: 20px;
  margin: 10px;
  height: ${(props) => props.height};
  border-radius: 20px;
  overflow: hidden;
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
