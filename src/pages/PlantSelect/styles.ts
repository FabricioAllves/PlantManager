import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.background};
`;

export const HeaderWrapper = styled.View`
  padding: 30px 30px 0 30px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  font-size: 17px;
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.Colors.heading};
  font-size: 17px;
  line-height: 20px;
  
`;