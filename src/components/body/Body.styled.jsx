import styled, { keyframes } from "styled-components";
import { FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

export const DotsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.8rem;
  margin-top: 7rem;
`;

export const AnimatedHeading = styled(motion.div)`
  position: absolute;
  top: 42%;
`;

export const Dot = styled.div.attrs(({ bgColor }) => ({
  bgColor: bgColor || "#e1e1e1",
}))`
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};

  &:hover {
    cursor: pointer;
  }
`;

const bounce = keyframes`
0%{
  transform:translate(-50%,0)
}
50%{
  transform:translate(-50%,-2rem)
}
100%{
  transform:translate(-50%,0)
}
`;

export const StyledAnimatedIcon = styled(FaSun)`
  background-color: ${(props) => props.bgColor || "black"};
  color: "white";
  border-radius: 100rem;
  padding: 0.3rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s ease-in-out infinite;

  &:hover {
    cursor: pointer;
  }
`;
