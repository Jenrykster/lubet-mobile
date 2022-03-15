import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Description = styled.Text<{ borderColor: string }>`
  color: ${Colors.grayText};
  padding: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 3px;
  margin-bottom: 3%;
  border-width: 1px;
  border-color: ${(props) => props.borderColor};
  text-align: center;
`;
