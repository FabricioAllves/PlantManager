import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export interface Activee{
  active: boolean
}

export const Container = styled(RectButton)<Activee>`
  background-color: ${({active, theme}) => active ? theme.Colors.green_light : theme.Colors.shape};
  width: 76px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const Text = styled.Text<Activee>`
  color:  ${({active, theme}) => active ? theme.Colors.green : theme.Colors.heading};
  font-family: ${({active, theme}) => active ? theme.FONTS.heading : theme.FONTS.text};
`;

