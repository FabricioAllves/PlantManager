import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  LogoImg,
  ButtonT,
  ButtonText
} from './styles';

import { Feather } from '@expo/vector-icons'
import wateringImg from '../../assets/watering.png'

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Title>

      <LogoImg source={wateringImg} resizeMode='contain' />

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <ButtonT activeOpacity={0.8}>
        <ButtonText>
          <Feather name='chevron-right' style={{fontSize:32}}/>
        </ButtonText>
      </ButtonT>

    </Container>
  );
}