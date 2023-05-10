import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
`;

export const Emoji = styled.Text`
  font-size: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.heading};
  text-align: center;
  font-size: 17px;
  padding: 10px 0 10px 0;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 20px 50px 0 50px;
`;