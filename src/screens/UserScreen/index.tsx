import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Keyboard, LayoutAnimation } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomInput } from '../../components/Input';
import { MainNavigatorParamList } from '../../shared/types';
import { EditUserButton } from './EditUserButton';
import {
  AvatarPic,
  ButtonContainer,
  ColoredBackground,
  FormContainer,
  Screen,
  UserDataContainer,
  UserEmail,
  UserInitial,
  UserName,
} from './styles';

type UserScreenProps = BottomTabScreenProps<MainNavigatorParamList, 'User'>;

export const UserScreen = (props: UserScreenProps) => {
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [validity, setValidity] = useState({ name: true, email: true });
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const openKeyboardListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const closeKeyboardListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      openKeyboardListener.remove();
      closeKeyboardListener.remove();
    };
  }, []);

  useEffect(() => {}, []);

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
  const editDataComponents = (
    <KeyboardAwareScrollView>
      <FormContainer>
        <CustomInput
          valid={validity.name}
          value={typedName}
          icon='md-text'
          onChange={setTypedName}
          placeholder='John Doe'
        />
        <CustomInput
          valid={validity.email}
          value={typedEmail}
          icon='md-mail'
          onChange={setTypedEmail}
          placeholder='email@email.com'
        />
      </FormContainer>
    </KeyboardAwareScrollView>
  );
  return (
    <Screen>
      <ColoredBackground>
        <AvatarPic>
          <UserInitial>J</UserInitial>
        </AvatarPic>
      </ColoredBackground>

      {!editMode && userDataComponents}
      {editMode && editDataComponents}
      {!isKeyboardOpen && (
        <ButtonContainer>
          <EditUserButton
            disabled={!buttonEnabled}
            onPress={transitionToEdit}
            title={editMode ? 'SAVE' : 'UPDATE'}
            icon={editMode ? 'md-save' : 'md-create'}
          />
        </ButtonContainer>
      )}
    </Screen>
  );
};
