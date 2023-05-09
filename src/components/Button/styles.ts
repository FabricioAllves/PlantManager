
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ButtonT = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.Colors.white};
  font-size: 24px;
`;