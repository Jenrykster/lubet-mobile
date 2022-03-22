import styled from 'styled-components/native';
import { Colors } from '@constants';

export const ButtonsGroupContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 50px 25px;
  margin-left: 45px;
`;

export const ButtonContainer = styled.TouchableOpacity<{ primary: boolean }>`
  background-color: ${(props) =>
    props.primary ? Colors.primary : 'transparent'};
  padding: ${(props) => (props.primary ? '30px' : '0px')};
  border-radius: 20px;
`;

export const ButtonText = styled.Text<{ primary: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.primary ? 'white' : Colors.primary)};
  text-align: center;
`;
