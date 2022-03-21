import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Screen = styled.View`
  flex: 1;
`;

export const ColoredBackground = styled.View`
  height: 20%;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: flex-end;
`;

export const AvatarPic = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 2px;
  border-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
  margin-bottom: -75px;
  background-color: white;
`;

export const UserInitial = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

export const UserDataContainer = styled.View`
  align-items: center;
  margin-top: 90px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 40%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const UserName = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const UserEmail = styled.Text`
  margin-top: 5px;
  font-size: 19px;
  color: ${Colors.grayText};
  border-style: dotted;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.grayText};
  padding: 2px;
`;
