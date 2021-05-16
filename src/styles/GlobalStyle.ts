import { css, createGlobalStyle } from 'styled-components';

import theme from './themes/dark';

export const styles = css`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-size: 2rem;
    background: ${theme.colors.background};
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.texts};
  }
  
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
  }

  img {
    pointer-events: none;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default createGlobalStyle`${styles}`;