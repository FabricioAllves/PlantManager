import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.Colors.heading};
  margin-top: 38px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px 0 20px;
  color: ${({theme}) => theme.Colors.heading};
`;

export const LogoImg = styled.Image`
  width: 292px;
  height: 284px;
`;


