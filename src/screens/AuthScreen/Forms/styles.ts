import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin: 50px 0px;
`;

export const Label = styled.Text`
  color: ${Colors.grayText};
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-color: ${Colors.primary};
  border-radius: 10px;
  padding: 10px;
  border-width: 2px;
  margin: 10px 0px;
  color: ${Colors.grayText};
`;

export const Screen = styled.View`
  padding: 60px 40px 0px 40px;
  height: auto;
  justify-content: center;
`;
