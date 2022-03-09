import React, { ReactNode } from 'react';
import { CardContainer } from './styles';

type PropsList = {
  children: ReactNode;
};

export const Card = (props: PropsList) => {
  return <CardContainer>{props.children}</CardContainer>;
};
