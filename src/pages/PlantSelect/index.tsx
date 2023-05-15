import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';


import api from '../../services/api';

import {
  Container,
  HeaderWrapper,
  Title,
  SubTitle,
  Plants
} from './styles';
import { PlantDTO } from '../../DTOS_Storage/PlantDTO';


interface environmentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<environmentProps[]>([]);
  const [plants, setPlants] = useState<PlantDTO[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantDTO[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false)

  const { navigate } = useNavigation()

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment)

    if (environment == 'all')
      return setFilteredPlants(plants)

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    )

    setFilteredPlants(filtered)
  }

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if (!data)
      return setLoading(true)

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fetchPlants()
  }

  function handlePlantSelect(plant: PlantDTO) {
    navigate('PlantSave', {plant})
  }


  useEffect(() => {
    async function fetchenvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchenvironment()
  }, []);

  useEffect(() => {
    fetchPlants()
  }, [])




  if (loading)
    return <Loading />
  return (
    <Container>
      <HeaderWrapper>
        <Header />

        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWrapper>

      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
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
      </View>

      <Plants>
        <FlatList
          data={filteredPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore
              ? <Loading />
              : <></>
          }
        />
      </Plants>

    </Container>
  );
}