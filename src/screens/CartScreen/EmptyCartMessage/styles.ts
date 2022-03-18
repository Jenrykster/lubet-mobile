import AnimatedLottieView from 'lottie-react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../constants';

export const EmptyCartMessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 75%;
`;

export const EmptyCartMessageTitle = styled.Text`
  color: ${Colors.primary};
  font-size: 30px;
`;

export const EmptyCartMessageSubTitle = styled.Text`
  color: ${Colors.primary};
  font-size: 15px;
`;

export const EmptyCartSubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EmptyCartTouchableText = styled.Text`
  color: ${Colors.primary};

  font-size: 20px;
`;

export const EmptyCartAnimation = styled(AnimatedLottieView)`
  align-items: center;
  margin-bottom: -70px;
  width: 90%;
  height: 90%;
`;

export const TouchableContainer = styled.TouchableOpacity`
  border-color: ${Colors.primary};
  border-bottom-width: 2px;
  border-radius: 4px;
  padding: 4px;
  border-style: dotted;
`;
