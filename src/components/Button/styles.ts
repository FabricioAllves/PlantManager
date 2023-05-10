
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ButtonT = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.Colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.Colors.white};
  font-family: ${({ theme }) => theme.FONTS.heading};
  font-size: 16px;
`;