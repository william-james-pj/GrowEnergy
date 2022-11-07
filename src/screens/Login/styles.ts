import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const WrapperBackgroud = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
`;

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 32px 16px 32px 16px;
`;

export const Header = styled.View`
  height: 90%;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.size.xl};
  font-family: ${fonts.type.text700};
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  line-height: 20px;
  text-align: center;
`;

export const TextFogot = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-align: right;
  width: 95%;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 24px 0 32px 0;
`;

export const ErrorText = styled.Text`
  width: 95%;
  text-align: center;
  margin-bottom: 32px;
  color: ${(props) => props.theme.colors.red};
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
`;
