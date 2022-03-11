import styled from 'styled-components/native';

export const GameElementContainer = styled.View<{
  active?: boolean;
  color: string;
}>`
  background-color: ${(props) => (props.active ? props.color : 'transparent')};
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: ${(props) => props.color};
  border-width: 2px;
  margin: 2px 10px;
`;

export const GameElementTitle = styled.Text<{
  active?: boolean;
  color: string;
}>`
  color: ${(props) => (props.active ? 'white' : props.color)};
`;

export const GameSelectorContainer = styled.View`
  padding: 10px 0px;
`;
