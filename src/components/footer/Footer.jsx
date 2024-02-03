import { Text } from "../../utils/Text.styled";
import { StyledFooter } from "./Footer.styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <StyledFooter>
      <Text size="normal" color="#000">
        Here’s how it works
      </Text>
      <MdOutlineKeyboardArrowDown size={26} />
    </StyledFooter>
  );
};

export default Footer;
