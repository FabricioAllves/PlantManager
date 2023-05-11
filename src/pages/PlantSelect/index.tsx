import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native'

import { EnviromentButton } from '../../components/EnviromentButton';
import { Header } from '../../components/Header';
import api from '../../services/api';


import {
  Container,
  HeaderWrapper,
  Title,
  SubTitle,
} from './styles';

interface EnviromentProps {
  key: string;
  title: string;
  id: number
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments')
      setEnviroments([
        {
          key:'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnviroment()
  },[])

  return (
    <Container>
      <HeaderWrapper>
        <Header />

        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWrapper>

      <FlatList
        data={enviroments}
        keyExtractor={ (item) => item.key }
        renderItem={({ item }) => (
          <EnviromentButton
            title={item.title}
          />
        )}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: 60,
          justifyContent: 'center',
          paddingBottom: 5,
          marginLeft: 32,
          paddingEnd: 32,
          marginVertical: 32,
        }}
      />

    </Container>
  );
}