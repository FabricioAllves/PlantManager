import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  LogoImg,
  ButtonT
} from './styles';

import { Feather } from '@expo/vector-icons'
import wateringImg from '../../assets/watering.png'

export function Welcome() {
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Title>

        <LogoImg source={wateringImg} resizeMode='contain' />

        <SubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </SubTitle>

        <ButtonT activeOpacity={0.8}>
          <Feather name='chevron-right' style={{ fontSize: 32, color: 'white' }} />
        </ButtonT>
      </Wrapper>
    </Container>
  );
}