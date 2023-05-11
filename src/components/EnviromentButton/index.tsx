import React from 'react';
import { View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'


import {
  Container,
  Text
} from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (

      <Container active={active}
        {...rest}
      >
        <Text active={active}>
          {title}
        </Text>
      </Container>

  );
}