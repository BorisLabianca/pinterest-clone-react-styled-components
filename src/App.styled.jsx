import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
    margin:0;
    padding:0;
    border:none;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -ms-bow-sizing:border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`;
