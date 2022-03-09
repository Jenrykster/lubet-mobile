import styled from 'styled-components/native';

export const CardContainer = styled.View<{ bgColor?: string }>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
  padding: 20px;
  border-radius: 10px;
  elevation: 3;
`;
