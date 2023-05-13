import React, {useEffect, useState} from 'react';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Container,
  Wrapper,
  Greeting,
  UseName,
  Imagem
} from './styles';

import userProfile from '../../assets/userProfile.jpg'

export function Header(){
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName(){
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUserName(user || '')
    }

    loadStorageUserName()
  },[])

  return (                          //escapar da area do header dos novos iphones / nao sobre por por baixo
    <Container style={{marginTop: getStatusBarHeight()}}>
      <Wrapper>
        <Greeting>Olá,</Greeting>
        <UseName>{userName}</UseName>
      </Wrapper>

      <Imagem source={userProfile} />
    </Container>
  );
}