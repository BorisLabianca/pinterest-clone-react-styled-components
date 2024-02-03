import { FaPinterest } from "react-icons/fa";
import { LogoContainer, StyledHeader } from "./Header.styled";
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
    </StyledHeader>
  );
};

export default Header;
