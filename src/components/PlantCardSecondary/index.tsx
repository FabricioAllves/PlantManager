import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler'
import {SvgFromUri} from 'react-native-svg'

import {
  Container,
  Title,
  Details,
  TimeLabel,
  Time
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecondary({data, ...rest}:PlantProps){
  return (
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
  );
}