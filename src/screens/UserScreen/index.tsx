import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useRef, useState } from 'react';
import { Animated, Easing, LayoutAnimation } from 'react-native';
import { MainNavigatorParamList } from '../../shared/types';
import { EditUserButton } from './EditUserButton';
import {
  AvatarPic,
  ButtonContainer,
  ColoredBackground,
  Screen,
  UserDataContainer,
  UserEmail,
  UserInitial,
  UserName,
} from './styles';

type UserScreenProps = BottomTabScreenProps<MainNavigatorParamList, 'User'>;

export const UserScreen = (props: UserScreenProps) => {
  const [editMode, setEditMode] = useState(false);

  const transitionToEdit = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.opacity
      )
    );
    setEditMode(true);
  };

  const userDataComponents = (
    <>
      <UserDataContainer>
        <UserName>João Henrique</UserName>
        <UserEmail key={'opa'}>joao@email.com</UserEmail>
      </UserDataContainer>
    </>
  );
  const editDataComponents = <></>;
  return (
    <Screen>
      <ColoredBackground>
        <AvatarPic>
          <UserInitial>J</UserInitial>
        </AvatarPic>
      </ColoredBackground>

      {!editMode && userDataComponents}
      {editMode && editDataComponents}
      <ButtonContainer>
        <EditUserButton
          onPress={transitionToEdit}
          title={editMode ? 'SAVE' : 'UPDATE'}
          icon={editMode ? 'md-save' : 'md-create'}
        />
      </ButtonContainer>
    </Screen>
  );
};
