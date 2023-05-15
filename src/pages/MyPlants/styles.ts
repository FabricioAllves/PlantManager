import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0 30px;
  background-color: ${({ theme }) => theme.Colors.background};
`;

export const Spotlight = styled.View`
  background-color: ${({ theme }) => theme.Colors.blue_light};
  padding: 0 20px 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  padding: 0 20px 0 20px;
  color: ${({ theme }) => theme.Colors.blue};
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  margin: 20px 0 20px 0;
`;
