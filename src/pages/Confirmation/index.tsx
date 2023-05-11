import React from 'react';
import {useNavigation} from '@react-navigation/native'

import {
  Container, Content, Emoji, Title, SubTitle, Footer
} from './styles';

import { Button } from '../../components/Button';

export function Confirmation() {
  const {navigate} = useNavigation()

  return (
    <Container>
      <Content>
        <Emoji>😃</Emoji>
        <Title>
          Prontinho
        </Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button title='Começar' onPress={() => navigate('PlantSelect')}/>
        </Footer>
      </Content>
    </Container>
  );
}