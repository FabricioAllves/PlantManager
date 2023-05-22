import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { Header } from '../../components/Header';

import {
  Container,
  Spotlight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantsTitle
} from './styles';

import waterdrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps, removePlant } from '../../DTOS_Storage/PlantDTO';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Loading } from '../../components/Loading';


export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();


  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não ❌',
        style: 'cancel'
      },
      {
        text: 'Sim ✅',
        onPress: async () => {
          try {
            await removePlant(plant.id)
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            )
          } catch (error) {
            Alert.alert("Não foi possivel remover!")
          }
        }
      }
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantStoraged = await loadPlant();

      // calcula a distancia de uma data para outra
      const nextTime = formatDistance(
        new Date(plantStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantStoraged[0].name} à ${nextTime} horas.`
      );

      setMyPlants(plantStoraged)
      setLoading(false)
    }

    loadStorageData()
  }, []);

  if (loading)
    return <Loading />
  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotLightImage
          source={waterdrop}
        />

        <SpotLightText>
          {nextWaterd}
        </SpotLightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>
          Próximas regadas
        </PlantsTitle>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              onPress={() => handleRemove(item)}           
              />
          )}

        />
      </Plants>
    </Container>
  );
}