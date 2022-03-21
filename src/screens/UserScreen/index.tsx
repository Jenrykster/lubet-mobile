import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Keyboard, LayoutAnimation } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { CustomInput } from '../../components/Input';
import { MainNavigatorParamList } from '../../shared/types';
import { validateEmail, validateName } from '../../shared/utils';
import { RootState } from '../../store';
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
  const userData = useSelector((state: RootState) => state.user);

  const [typedName, setTypedName] = useState(userData.name);
  const [typedEmail, setTypedEmail] = useState(userData.email);
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

  useEffect(() => {
    const isEmailValid = validateEmail(typedEmail);
    const isNameValid = validateName(typedName);
    setValidity({ email: isEmailValid, name: isNameValid });
    setButtonEnabled(isEmailValid && isNameValid);
  }, [typedEmail, typedName]);

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
        <UserName>{typedName}</UserName>
        <UserEmail>{typedEmail}</UserEmail>
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
          <UserInitial>{typedName[0] || '?'}</UserInitial>
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
