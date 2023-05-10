import React from 'react'

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}

