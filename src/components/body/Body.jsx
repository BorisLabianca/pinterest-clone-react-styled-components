import { useEffect, useState } from "react";
import {
  AnimatedHeading,
  Dot,
  DotsContainer,
  HeadingsContainer,
  StyledAnimatedIcon,
  StyledBody,
} from "./Body.styled";
import { HEADINGS } from "../../utils/texts";
import { Text } from "../../utils/Text.styled";
import Tiles from "../tiles/Tiles";
import { AnimatePresence } from "framer-motion";

const Body = ({ toggleTheme }) => {
  const [currentHeadingsIndex, setCurrentHeadingsIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeadingsIndex((currentIndex) =>
        currentIndex + 1 < 4 ? currentIndex + 1 : 0
      );
    }, 4000);
    return () => clearInterval(id);
  }, [currentHeadingsIndex]);

  return (
    <StyledBody>
      <HeadingsContainer>
        <Text size="xLarge">Get your next</Text>
        <AnimatePresence>
          {HEADINGS.map(
            (heading, index) =>
              heading.index === currentHeadingsIndex && (
                <AnimatedHeading
                  initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{
                    y: "-50%",
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  key={index}
                >
                  <Text size="xLarge" color={heading.color}>
                    {heading.name}
                  </Text>
                </AnimatedHeading>
              )
          )}
        </AnimatePresence>
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
      <Tiles currentHeadingsIndex={currentHeadingsIndex} />
      <StyledAnimatedIcon
        size={50}
        bgColor={HEADINGS[currentHeadingsIndex].color}
        onClick={toggleTheme}
      />
    </StyledBody>
  );
};

export default Body;
