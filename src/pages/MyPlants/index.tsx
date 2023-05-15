import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
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
import { loadPlant, PlantDTO } from '../../DTOS_Storage/PlantDTO';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

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
            <PlantCardSecondary data={item}/>
          )}
          
        />
      </Plants>
    </Container>
  );
}