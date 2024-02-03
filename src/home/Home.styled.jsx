import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 94% 6%;
  background-color: ${(props) => props.theme.background};
`;
