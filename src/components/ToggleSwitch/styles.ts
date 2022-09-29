import styled from "styled-components/native";
// import { fonts } from "../../styles/fonts";

type WrapperProps = {
  isActive: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  width: 41px;
  height: 21px;
  border-radius: 17px;

  padding: 0 2px;

  background: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.disabled};

  display: flex;
  justify-content: center;

  align-items: ${(props) => (props.isActive ? "flex-end" : "flex-start")};
`;

export const Circle = styled.View`
  width: 17px;
  height: 17px;
  border-radius: 17px;

  background: ${(props) => props.theme.colors.card};
`;
