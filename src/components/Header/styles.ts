import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 0;
`;

export const Wrapper = styled.View`
  
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.Colors.heading};
  font-family: ${({ theme }) => theme.FONTS.text};
`;

export const UseName = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.Colors.heading};
  line-height: 40px;
`;

export const Imagem = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;






