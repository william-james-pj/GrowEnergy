import React, { useState } from "react";

import * as S from "./styles";

type TextInputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  validator?: (input: string) => boolean;
  errorText?: string;
  widhtBox?: string;
  keyboardType?: "default" | "email-address";
};

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export function TextInput({
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
  validator,
  errorText = "",
  widhtBox = "100%",
  keyboardType = "default",
}: TextInputProps) {
  const [validState, setValidState] = useState<InputState>(Pristine);

  const changeText = (text: string) => {
    onChangeText(text);
    if (validState !== Pristine) validate();
  };

  const validate = () => {
    if (validator) {
      const valid = validator(value);
      setValidState(valid);
    }
  };

  return (
    <S.Wrapper>
      <S.Box color={validState} width={widhtBox}>
        <S.TextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          value={value}
          onChangeText={changeText}
          secureTextEntry={secureTextEntry}
          onBlur={validate}
          keyboardType={keyboardType}
          autoCapitalize={
            keyboardType === "email-address" ? "none" : "sentences"
          }
        />
      </S.Box>
      {validState === Invalid && <S.ErrorText>{errorText}</S.ErrorText>}
    </S.Wrapper>
  );
}
