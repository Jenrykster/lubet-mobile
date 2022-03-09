import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ItalicText = styled.Text<{ color?: string; size?: string }>`
  color: ${(props) => (props.color ? props.color : '#707070')};
  font-weight: bold;
  font-style: italic;
  font-size: ${(props) => (props.size ? props.size : '30px')};
`;
export const HighLight = styled.View`
  background-color: ${Colors.primary};
  padding: 2px 25px;
  border-radius: 20px;
`;
