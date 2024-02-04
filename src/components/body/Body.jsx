import { useState } from "react";
import {
  Dot,
  DotsContainer,
  HeadingsContainer,
  StyledAnimatedIcon,
  StyledBody,
} from "./Body.styled";
import { HEADINGS } from "../../utils/texts";
import { Text } from "../../utils/Text.styled";

const Body = ({ toggleTheme }) => {
  const [currentHeadingsIndex, setCurrentHeadingsIndex] = useState(0);
  return (
    <StyledBody>
      <HeadingsContainer>
        <Text size="xLarge">Get your next</Text>
        <Text size="xLarge" color={HEADINGS[currentHeadingsIndex].color}>
          {HEADINGS[currentHeadingsIndex].name}
        </Text>
        <DotsContainer>
          {HEADINGS.map(({ index, color }) => (
            <Dot
              bgColor={index === currentHeadingsIndex ? color : null}
              key={index}
              onClick={() => setCurrentHeadingsIndex(index)}
            />
          ))}
        </DotsContainer>
      </HeadingsContainer>
      <StyledAnimatedIcon
        size={50}
        bgColor={HEADINGS[1].color}
        onClick={toggleTheme}
      />
    </StyledBody>
  );
};

export default Body;
