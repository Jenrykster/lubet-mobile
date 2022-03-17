import AnimatedLottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import {
  EmptyCartAnimation,
  EmptyCartMessageContainer,
  EmptyCartMessageSubTitle,
  EmptyCartMessageTitle,
  EmptyCartSubtitleContainer,
  EmptyCartTouchableText,
  TouchableContainer,
} from './styles';

export const EmptyCartMessage = (props: { onNewBetPress: () => void }) => {
  const animation = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    animation.current?.play();
  });
  return (
    <EmptyCartMessageContainer>
      <EmptyCartAnimation
        autoPlay={true}
        loop={true}
        source={require('../../../../assets/empty-cart-animation.json')}
      />
      <EmptyCartMessageTitle>Your cart is empty</EmptyCartMessageTitle>
      <EmptyCartSubtitleContainer>
        <EmptyCartMessageSubTitle>Go make a </EmptyCartMessageSubTitle>
        <TouchableContainer onPress={props.onNewBetPress}>
          <EmptyCartTouchableText>new bet</EmptyCartTouchableText>
        </TouchableContainer>
      </EmptyCartSubtitleContainer>
    </EmptyCartMessageContainer>
  );
};
