import React from 'react'

import { Welcome } from './src/pages/Welcome'
import { Loading } from './src/components/Loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import theme from './src/theme';

import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold })



  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Loading /> : <Welcome />}
    </ThemeProvider>
  )
}

