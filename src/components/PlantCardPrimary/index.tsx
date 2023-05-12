import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler'
import {SvgFromUri} from 'react-native-svg'

import {
  Container,
  Text
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCardPrimary({data, ...rest}:PlantProps){
  return (
    <Container {...rest}>

      <SvgFromUri uri={data.photo} width={70} height={70}/>

      <Text>
        {data.name}
      </Text>
    </Container>
  );
}