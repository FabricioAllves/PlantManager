import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SvgFromUri } from 'react-native-svg'

import {
  Container,
  Title,
  Details,
  TimeLabel,
  Time,
  ButtonRemove
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  onPress: () => void;
}

export function PlantCardSecondary({ data, onPress, ...rest }: PlantProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove
            onPress={onPress}
            >
              <Feather name='trash' size={32} color={'white'} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />

      <Title>
        {data.name}
      </Title>

      <Details>
        <TimeLabel>
          Regar às
        </TimeLabel>
        <Time>
          {data.hour}
        </Time>
      </Details>
    </Container>
    </Swipeable>
  );
}