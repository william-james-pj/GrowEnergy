import React, { useState } from "react";

import * as S from "./styles";

type TextInputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  validator?: (input: string) => boolean;
  setValidatedStatus?: (status: boolean) => void;
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
  setValidatedStatus,
  errorText = "",
  widhtBox = "100%",
  keyboardType = "default",
}: TextInputProps) {
  const [validState, setValidState] = useState<InputState>(Pristine);

  const changeText = (text: string) => {
    onChangeText(text);
    validate(text);
  };

  const validate = (text: string) => {
    if (validator) {
      const valid = validator(text);
      setValidState(valid);
      if (setValidatedStatus) {
        setValidatedStatus(valid);
      }
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
