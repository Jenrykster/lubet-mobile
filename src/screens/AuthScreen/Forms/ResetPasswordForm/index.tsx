import React from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';

type ResetPasswordProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'ResetPassword'
>;

export const ResetPasswordForm = (props: ResetPasswordProps) => {
  return (
    <Screen>
      <Title />
      <FormContainer>
        <Card>
          <Label>Email</Label>
          <Input keyboardType='email-address' placeholder='user@mail.com' />
          <ConfirmButton
            text='Send Link'
            primary
            onPress={() => {}}
            arrowDirection='FRONT'
          />
        </Card>
        <ConfirmButton
          arrowDirection='BACK'
          text='Go back'
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </FormContainer>
    </Screen>
  );
};
