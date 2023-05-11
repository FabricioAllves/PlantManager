import React from 'react';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import {
  Container,
  Wrapper,
  Greeting,
  UseName,
  Imagem
} from './styles';

import userProfile from '../../assets/userProfile.jpg'

export function Header(){
  return (                          //escapar da area do header dos novos iphones / nao sobre por por baixo
    <Container style={{marginTop: getStatusBarHeight()}}>
      <Wrapper>
        <Greeting>Olá,</Greeting>
        <UseName>Fabricio</UseName>
      </Wrapper>

      <Imagem source={userProfile} />
    </Container>
  );
}