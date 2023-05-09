import React, { useState } from 'react';

import wateringImg from '../../assets/watering.png'
import { Button } from '../../components/Button';
import {
  Container,
  Title,
  SubTitle,
  LogoImg,
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Title>

        <LogoImg source={wateringImg} />

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <Button title='>'/>

    </Container>
  );
}