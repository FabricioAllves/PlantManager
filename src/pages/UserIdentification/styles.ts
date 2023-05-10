import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const OutSide = styled.TouchableWithoutFeedback`
  
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px 0 54px;
`;

export const Text = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.Colors.heading};
  font-family: ${({ theme }) => theme.FONTS.heading};
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const TextInputLine = styled.TextInput`
  border-color: ${({ theme }) => theme.Colors.gray};
  color: ${({ theme }) => theme.Colors.heading};
  border-bottom-width: 1px;
  text-align: center;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  margin-top: 50px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px 0 20px;
`;
