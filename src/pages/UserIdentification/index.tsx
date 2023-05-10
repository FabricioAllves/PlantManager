import React, { useState } from 'react';
import { Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'

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
              <Button title='Confirmar' onPress={() => navigate('Confirmation')} />
            </Footer>
          </Form>
        </OutSide>
      </Content>
    </Container>
  );
}