import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.shape};
  margin: 5px 0 5px 0;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  margin-left: 10px;
  font-size: 17px;
`;

export const Details = styled.View`
  align-items: center;
`;

export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.Colors.red};
`;