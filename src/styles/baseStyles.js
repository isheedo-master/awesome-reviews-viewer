import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset}

  :root, html, body {
    font-family: Helvetica Neue, Arial, sans-serif;
  }

  h1, h2, h3, h4 {
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.9375rem;
  }

  h4 {
    font-size: 1.5625rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  em {
    font-style: italic;
  }

  b, strong {
    font-weight: bold;
  }
`;

export default baseStyles;
