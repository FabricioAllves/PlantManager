import React from 'react'
import theme from './src/theme';
import { Welcome } from './src/pages/Welcome'
import { ThemeProvider } from 'styled-components/native';

export default function App(){
  return(
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  )
}

