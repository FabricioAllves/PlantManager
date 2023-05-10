import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px 0 20px
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.Colors.heading};
  font-family: ${({ theme }) => theme.FONTS.heading};
  margin-top: 38px;
  line-height: 34px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px 0 20px;
  color: ${({theme}) => theme.Colors.heading};
  font-family: ${({ theme }) => theme.FONTS.text};
`;

export const LogoImg = styled.Image`
  width: 292px;
  height: 284px;
`;

export const ButtonT = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

