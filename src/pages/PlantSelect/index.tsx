import React from 'react';
import { EnviromentButton } from '../../components/EnviromentButton';
import { Header } from '../../components/Header';


import {
  Container,
  HeaderWrapper,
  Title,
  SubTitle,
} from './styles';

export function PlantSelect() {
  return (
    <Container>
      <HeaderWrapper>
        <Header />

        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWrapper>

      <EnviromentButton title='Cozinha'/>
    </Container>
  );
}