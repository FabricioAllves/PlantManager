import React from 'react';
import { View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'


import {
  Container,
  Text
} from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButtonProps) {
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