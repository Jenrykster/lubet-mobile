import React from 'react';
import { SaveCartButtonContainer, SaveCartButtonText } from './styles';

export const SaveCartButton = (props: {
  onSaveCartButtonPress: () => void;
}) => {
  return (
    <SaveCartButtonContainer onPress={props.onSaveCartButtonPress}>
      <SaveCartButtonText>Save</SaveCartButtonText>
    </SaveCartButtonContainer>
  );
};
