import styled from 'styled-components/native';


export const Container = styled.View`
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
  padding-left: 20px;
  padding-right: 20px;
  color: ${({theme}) => theme.Colors.heading};
`;

export const Button = styled.TouchableOpacity`
`;