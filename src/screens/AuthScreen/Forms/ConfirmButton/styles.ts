import styled from 'styled-components/native';
import { Colors } from '../../../../constants';

export const FormConfirmText = styled.Text<{ primary: boolean }>`
  color: ${(props) => (props.primary ? 'white' : Colors.grayText)};
  font-size: 25px;
  font-weight: bold;
`;

export const FormConfirmWrapper = styled.TouchableOpacity<{ primary: boolean }>`
  background-color: ${(props) =>
    props.primary ? Colors.primary : 'transparent'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
  margin: ${(props) =>
    props.primary ? '20px -20px -20px -20px;' : '10% 0px 0px 0px'};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
