import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  padding: 32px 16px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const ViewButton = styled.View`
  background: ${(props) => props.theme.colors.text};
  padding: 6px 16px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;

export const Separator = styled.View`
  background: ${(props) => props.theme.colors.disabled};
  width: 100%;
  height: 1px;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 20px;
`;

export const EmptyView = styled.View`
  background: transparent;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextEmpty = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;
