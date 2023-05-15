import React, { useState } from 'react';
import { Platform, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';

import {
  Container,
  Content,
  OutSide,
  Form,
  Text,
  Emoji,
  TextInputLine,
  Footer
} from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const { navigate } = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert("Me diz como chamar você 🥲");

    try {
      await AsyncStorage.setItem("@plantmanager:user", name)
      navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert("Não foi possivel salvar o seu nome 🥲");
    }
  }

  return (
    <Container>
      <Content
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // KeyboardAvoidingView
      >
        <OutSide onPress={Keyboard.dismiss}>
          <Form>
            <Emoji>{isFilled ? '😃' : '😄'}</Emoji>
            <Text>
              Como podemos{'\n'}
              chamar você?
            </Text>
            <TextInputLine
              placeholder='Digite um nome'
              placeholderTextColor='gray'
              cursorColor='gray'
              onBlur={handleInputBlur} //Quando sai do foco
              onFocus={handleInputFocus} //Quando entra no foco
              onChangeText={handleInputChange}

              style={[(isFocused || isFilled) && { borderColor: 'green' }]}
            />

            <Footer>
              <Button title='Confirmar' onPress={handleSubmit} />
            </Footer>
          </Form>
        </OutSide>
      </Content>
    </Container>
  );
}