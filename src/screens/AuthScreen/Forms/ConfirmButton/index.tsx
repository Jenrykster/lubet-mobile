import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../../constants';
import { FormConfirmText, FormConfirmWrapper } from './styles';

export const ConfirmButton = (props: {
  text: string;
  primary?: boolean;
  onPress: () => void;
}) => {
  return (
    <FormConfirmWrapper
      activeOpacity={0.7}
      primary={props.primary || false}
      onPress={props.onPress}
    >
      <FormConfirmText primary={props.primary || false}>
        {props.text}
      </FormConfirmText>

      <Ionicons
        name='md-arrow-forward'
        color={props.primary ? 'white' : Colors.grayText}
        size={30}
      />
    </FormConfirmWrapper>
  );
};
