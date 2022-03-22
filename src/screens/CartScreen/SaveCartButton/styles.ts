import styled from 'styled-components/native';
import { Colors } from '@constants';

export const SaveCartButtonText = styled.Text`
  color: ${Colors.buttonGreen};
  font-weight: bold;
  font-size: 20px;
`;

export const SaveCartButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  padding: 30px;
  margin: 10px 20px;
  border-color: ${Colors.buttonGreen};
  border-width: 4px;
  border-radius: 15px;
`;
