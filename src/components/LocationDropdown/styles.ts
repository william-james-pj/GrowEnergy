import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 170px;
  padding: 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewTextContainer = styled.View`
  flex-direction: row;
`;

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin: 0 8px;
`;

export const ViewModalContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
`;

export const ViewModalBox = styled.View`
  width: 220px;
  height: 210px;
  background: ${(props) => props.theme.colors.card};
  z-index: 999;
  overflow: hidden;
  border-radius: 8px;
  padding-bottom: 8px;
`;

export const ViewModalHeader = styled.View`
  height: 40px;
  background: ${(props) => props.theme.colors.primary};
  margin-bottom: 8px;
  justify-content: center;
  padding: 0 16px;
`;

export const TextModalHeader = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const ViewModalContent = styled.View`
  padding: 0px 8px;
  flex: 1;
`;

export const ViewRow = styled.View`
  overflow: hidden;
`;

export const TextItem = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;
