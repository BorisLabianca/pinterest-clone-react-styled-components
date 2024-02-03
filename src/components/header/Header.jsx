import { FaPinterest } from "react-icons/fa";
import {
  AuthButton,
  AuthButtonsContainer,
  LinkContainer,
  LogoContainer,
  StyledHeader,
  StyledLink,
} from "./Header.styled";
import { Text } from "../../utils/Text.styled";

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <FaPinterest color="#E60022" size={33} />
        <Text color="#E60022" as="h1" size="large" className="logo">
          Pinterest
        </Text>
      </LogoContainer>
      <LinkContainer>
        <StyledLink as="a">About</StyledLink>
        <StyledLink as="a">Business</StyledLink>
        <StyledLink as="a">Blog</StyledLink>
        <AuthButtonsContainer>
          <AuthButton type="highlight">Log in</AuthButton>
          <AuthButton>Sign up</AuthButton>
        </AuthButtonsContainer>
      </LinkContainer>
    </StyledHeader>
  );
};

export default Header;
