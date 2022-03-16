import styled from 'styled-components/native';

export const NumberContainer = styled.TouchableOpacity<{
  isActive: boolean;
  color: string;
}>`
  width: 17%;
  border-radius: 50px;
  padding: 5%;
  margin: 5px;
  background-color: ${(props) => (props.isActive ? props.color : '#adc0c4')};
`;

export const NumberText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
