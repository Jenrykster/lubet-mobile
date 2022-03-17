import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 100px;
  align-items: center;
`;
export const CartTitle = styled.Text`
  color: ${Colors.grayText};
  font-size: 28px;
  text-align: center;
`;

export const CartTitleBold = styled.Text`
  font-weight: bold;
  font-style: italic;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 10px;
  padding: 5px;
`;

export const CartTitlePrice = styled.Text`
  color: white;
  font-size: 28px;
  text-decoration: underline;
`;
