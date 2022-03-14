import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const NoBetsMessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 80%;
`;

export const NoBetsText = styled.Text`
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 20px;
`;

export const NoBetsImageContainer = styled.View`
  width: 300px;
  height: 300px;
`;
