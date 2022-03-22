import AnimatedLottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Colors } from '@constants';
import { RootState } from '@store';
import { AnimatedIconContainer } from './styles';

export const AnimatedCartIcon = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const animation = useRef<AnimatedLottieView>(null);

  const firstRun = useRef<boolean>(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      animation.current?.play();
    }
  }, [cartState]);

  return (
    <AnimatedIconContainer
      ref={animation}
      loop={false}
      speed={2}
      colorFilters={[{ color: Colors.primary, keypath: '*' }]}
      source={require('../../../assets/cart-animation.json')}
    />
  );
};
