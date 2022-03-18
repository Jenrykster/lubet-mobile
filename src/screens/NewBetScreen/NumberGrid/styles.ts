import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const NumberGridOverflowCutter = styled.View<{ height: string }>`
  height: ${(props) => props.height};
  border-radius: 40px;
  overflow: hidden;
`;
export const NumberGridContainer = styled.FlatList`
  background-color: #cccccc50;
  margin: 0px 10px;
` as unknown as typeof FlatList;
