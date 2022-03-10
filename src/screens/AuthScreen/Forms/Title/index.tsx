import React, { FC, ReactNode } from 'react';
import { HighLight, ItalicText, TitleContainer } from './styles';

export const HighLightText = (props: { children: string }) => {
  return (
    <HighLight>
      <ItalicText color='white' size='20px'>
        {props.children}
      </ItalicText>
    </HighLight>
  );
};

export const Title = () => {
  return (
    <TitleContainer>
      <ItalicText>The Greatest App</ItalicText>
      <HighLightText>for</HighLightText>
      <ItalicText size='40px'>LOTTERY</ItalicText>
    </TitleContainer>
  );
};
