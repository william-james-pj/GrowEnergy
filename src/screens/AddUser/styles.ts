import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  padding: 32px 16px;
`;

export const ViewForm = styled.View`
  margin-top: 32px;
`;

export const TextInputLabel = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-bottom: 0px;
  margin-top: 8px;
`;

export const ViewRowPassword = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextRecoverPassword = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-left: 8px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewRule = styled.View`
  flex: 2;
`;

export const ViewStatus = styled.View`
  flex: 1;
`;

export const ViewToggleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const TextStatus = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-left: 8px;
`;

export const ViewLine = styled.View`
  background: ${(props) => props.theme.colors.disabled};
  height: 1px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const TextIsAdmin = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin-top: 16px;
`;

export const ViewCondominium = styled.View``;

export const ViewButton = styled.View`
  background: ${(props) => props.theme.colors.text};
  padding: 5px 8px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 8px;
  font-family: ${fonts.type.text700};
`;

export const ViewButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ViewSeparator = styled.View`
  width: 16px;
`;
