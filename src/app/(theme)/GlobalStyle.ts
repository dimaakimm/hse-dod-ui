import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 4px;
    transition: background 0.3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a3a3a3;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-button {
    background: transparent;
  }

  body {
    position: relative;
    font-family: var(--font-hse-sans);
    color: #fff;
  }

  /* Links */
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */
  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  strong,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-hse-sans);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ul li {
    list-style: none;
  }

  address {
    font-style: normal;
  }

  /* Form */
  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type='submit'] {
    display: inline-block;
    box-shadow: none;
    background: transparent;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }

`;

export default GlobalStyle;
