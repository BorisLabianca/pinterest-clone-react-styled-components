import styled from "styled-components";
import { FONTSIZES } from "./fontSizes";

export const Text = styled.p`
  font-size: ${(props) => FONTSIZES[props.size] || FONTSIZES["normal"]};
  font-weight: 500;
  color: ${(props) => props.color || props.theme.textColor};
  white-space: nowrap;
  &.logo {
    letter-spacing: -1px;
  }
`;
