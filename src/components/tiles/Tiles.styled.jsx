import styled from "styled-components";

export const TilesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  /* align-content: end; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 19rem;
`;

export const TileColumn = styled.div`
  height: 30rem;
  width: 100%;
  display: grid;
  transform: translateY(${({ margin }) => margin || "0rem"});
  gap: 1rem;
`;

export const Tile = styled.img`
  height: 23em;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
