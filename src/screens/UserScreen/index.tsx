import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Keyboard,
  LayoutAnimation,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { EditUserButton } from './EditUserButton';

import { CustomInput } from '@components';
import { Colors } from '@constants';
import { getUser, updateUser } from '@shared/services';
import { MainNavigatorParamList } from '@shared/types';
import { validateEmail, validateName } from '@shared/utils';

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
  const [isLoading, setIsLoading] = useState(false);
  const [previousData, setPreviousData] = useState({ email: '', name: '' });
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [validity, setValidity] = useState({ name: true, email: true });
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUserData = async () => {
      const result = await getUser();
      if (result.status === 200) {
        setPreviousData({
          email: result.data.email,
          name: result.data.password,
        });
        setTypedName(result.data.name);
        setTypedEmail(result.data.email);
      } else {
        Alert.alert('Error', 'Something went wrong, please try again', [
          { text: 'Ok', onPress: () => props.navigation.goBack() },
        ]);
      }
    };
    getUserData();
    setIsLoading(false);
  }, []);
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

  const updateUserData = async () => {
    setIsLoading(true);
    const result = await updateUser({ email: typedEmail, name: typedName });
    if (result.status === 200) {
      Alert.alert(
        'Updated successfully',
        'Your data was updated with success !',
        [{ text: 'Ok', onPress: () => props.navigation.navigate('BetsNav') }]
      );
    } else {
      Alert.alert('Error', 'Something went wrong, please try again');
      setTypedEmail(previousData.email);
      setTypedName(previousData.name);
    }
    setIsLoading(false);
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

      {!editMode && !isLoading && userDataComponents}
      {editMode && !isLoading && editDataComponents}
      {isLoading && <ActivityIndicator size='large' color={Colors.primary} />}
      {!isKeyboardOpen && !isLoading && (
        <ButtonContainer
          marginBottom={Dimensions.get('screen').height > 800 ? '40%' : '10%'}
        >
          <EditUserButton
            disabled={!buttonEnabled}
            onPress={editMode ? updateUserData : transitionToEdit}
            title={editMode ? 'SAVE' : 'UPDATE'}
            icon={editMode ? 'md-save' : 'md-create'}
          />
        </ButtonContainer>
      )}
    </Screen>
  );
};
