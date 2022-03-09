import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ItalicText = styled.Text<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
`;
export const HighLight = styled.View`
  background-color: ${Colors.primary};
  border-radius: 5px;
`;
