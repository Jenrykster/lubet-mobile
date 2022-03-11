import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const TouchableTextStyle = styled.Text<{ align?: string }>`
  color: ${Colors.grayText};
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
