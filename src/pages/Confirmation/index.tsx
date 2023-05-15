import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components/Button';

import {
  Container, Content, Emoji, Title, SubTitle, Footer
} from './styles';


interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😀'
}

export function Confirmation() {
  const { navigate } = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params

  function handleMoveOn() {
    navigate(nextScreen)
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subtitle}
        </SubTitle>
        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}