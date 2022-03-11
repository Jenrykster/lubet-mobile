import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
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
  flex: 1;
  padding: 40px;
`;
