import React from 'react';
import { TouchableOpacityProps } from 'react-native';



type ButtonProps = TouchableOpacityProps & {
  title: string
}

import {
  ButtonT,
  ButtonText
} from './styles';

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonT activeOpacity={0.8} {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonT>
  );
}