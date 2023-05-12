import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${({ theme }) => theme.Colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.Colors.green_dark};
  font-family: ${({ theme }) => theme.FONTS.heading};
  margin: 16px 0;
`;