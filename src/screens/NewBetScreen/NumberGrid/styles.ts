import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const NumberGridOverflowCutter = styled.View`
  height: 50%;
  border-radius: 40px;
  overflow: hidden;
`;
export const NumberGridContainer = styled.FlatList`
  background-color: #cccccc50;
  margin: 0px 10px;
` as unknown as typeof FlatList;
