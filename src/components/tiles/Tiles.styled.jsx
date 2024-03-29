import { motion } from "framer-motion";
import styled from "styled-components";

export const TilesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  /* align-content: end; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 10rem;
  padding: 6rem;
`;

export const TileColumn = styled.div`
  height: 30rem;
  width: 100%;
  position: absolute;
  transform: translateY(${({ margin }) => margin || "0rem"});
`;

export const AnimatedColumn = styled(motion.div)`
  position: relative;
`;

export const Tile = styled.img`
  height: 21.5em;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;
