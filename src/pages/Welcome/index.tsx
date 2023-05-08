import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import wateringImg from '../../assets/watering.png'
import { 
  Container,
  Title,
  SubTitle,
  Button
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie 
        suas plantas de 
        forma fácil
      </Title>

      <Image source={wateringImg}/>

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <Button>
        <Text>
          {'>'}
        </Text>
      </Button>
    </Container>
  );
}