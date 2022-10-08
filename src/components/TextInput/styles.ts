import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

const Valid = true;
const Invalid = false;
const Pristine = null;
type BoxProps = {
  color: typeof Valid | typeof Invalid | typeof Pristine;
  width: string;
  height: string;
};

type TextInputProps = {
  disabled: boolean;
};

export const Wrapper = styled.View`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;
  margin: 8px 0;
`;

export const Box = styled.View<BoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.colors.card};

  justify-content: center;
  padding: 0 15px;

  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.color === Valid
        ? props.theme.colors.primary
        : props.color === Invalid
        ? props.theme.colors.red
        : props.theme.colors.card};
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.disabled,
}))<TextInputProps>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.text};
  background: ${(props) => props.theme.colors.card};
  font-family: ${fonts.type.text400};
`;

export const ErrorText = styled.Text`
  width: 95%;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.xs};
`;
