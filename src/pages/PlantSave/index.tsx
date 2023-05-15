import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { format, isBefore } from 'date-fns'
import { SvgFromUri } from 'react-native-svg';
import { PlantDTO, savePlant } from '../../DTOS_Storage/PlantDTO';

import {
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  ButtonCalendar,
  ButtonCalendarText
} from './styles';

import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button';
import { Alert, Platform } from 'react-native';

interface Params {
  plant: PlantDTO
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const {navigate} = useNavigation();

  const route = useRoute();
  const { plant } = route.params as Params


  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState)
    }
    //          é antes ? (date a validar, data atual) Ex. data selecionada e posterior a data atual?
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date()) //data/hora atual
      return Alert.alert('Escolha uma hora no futuro!<br> ⏲️')
    }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    //                  invertendo a logica.... Ex....se antes era falso, agora passa a ser verdadeiro
    setShowDatePicker(oldState => !oldState)
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito Obrigado',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('Não foi possivel salvar.')
    }
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} width={150} height={150} />

        <PlantName>
          {plant.name}
        </PlantName>

        <PlantAbout>
          {plant.about}
        </PlantAbout>
      </PlantInfo>

      <Controller style={{ paddingBottom: getBottomSpace() || 20 }}>
        <TipContainer>
          <TipImage source={waterdrop} />

          <TipText>
            {plant.water_tips}
          </TipText>
        </TipContainer>

        <AlertLabel>
          Escolha o melhor horário para ser lembrado
        </AlertLabel>

        {
          showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

        {
          Platform.OS === 'android' && (
            <ButtonCalendar onPress={handleOpenDateTimePickerForAndroid}>
              <ButtonCalendarText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </ButtonCalendarText>
            </ButtonCalendar>
          )
        }

        <Button
          title='Cadastrar Planta'
          onPress={handleSave}
        />

      </Controller>
    </Container>
  );
}