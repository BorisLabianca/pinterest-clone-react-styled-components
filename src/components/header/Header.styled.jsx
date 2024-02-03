import styled from "styled-components";
import { Text } from "../../utils/Text.styled";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1rem 0 1.8rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledLink = styled(Text)`
  margin-right: 1.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AuthButton = styled(Text)`
  background-color: #efefef;
  padding: 0.7rem;
  border-radius: 100rem;

  ${({ type }) =>
    type === "highlight" &&
    `
      background-color: #e60022;
      color: white;
    `}

  &:hover {
    cursor: pointer;
  }
`;
