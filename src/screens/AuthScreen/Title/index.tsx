import React, { FC, ReactNode } from 'react';
import { HighLight, ItalicText, TitleContainer } from './styles';

export const HighLightText = (props: { children: string }) => {
  return (
    <HighLight>
      <ItalicText color='white'>{props.children}</ItalicText>
    </HighLight>
  );
};

export const Title = () => {
  return (
    <TitleContainer>
      <ItalicText>The Greatest App</ItalicText>
      <HighLightText>For</HighLightText>
      <ItalicText>LOTTERY</ItalicText>
    </TitleContainer>
  );
};
