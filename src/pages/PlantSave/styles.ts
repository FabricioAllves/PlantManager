import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.Colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  font-size: 24px;
  margin-top: 15PX;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.heading};
  font-size: 17px;
  margin-top: 10px;

`;

export const Controller = styled.View`
  background-color: ${({ theme }) => theme.Colors.white};
  padding: 20px 20px 0 20px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
  background-color: ${({ theme }) => theme.Colors.blue_light};
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ButtonCalendar = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
  `;

export const ButtonCalendarText = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.heading};
`;