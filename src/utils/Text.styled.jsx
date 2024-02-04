import styled, { css } from "styled-components";
import { FONTSIZES } from "./fontSizes";

export const Text = styled.p`
  font-size: ${(props) => FONTSIZES[props.size] || FONTSIZES["normal"]};
  font-weight: 500;
  color: ${(props) => props.color || props.theme.textColor};
  white-space: nowrap;
  &.logo {
    letter-spacing: -1px;
  }
  ${({ colorType }) =>
    colorType === "pinterestColor" &&
    css`
      color: ${(props) => props.theme.pinterestColor};
    `}
  ${({ colorType }) =>
    colorType === "signUpTextColor" &&
    css`
      color: ${(props) => props.theme.signUpTextColor};
    `}
`;
