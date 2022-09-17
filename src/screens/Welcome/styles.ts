import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  padding: 32px 16px 32px 16px;
`;

export const Header = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.size.xxl};
  font-family: ${fonts.type.text700};
  margin: 0 0 16px 0;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text400};
`;
