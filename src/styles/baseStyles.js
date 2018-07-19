import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset}

  :root, html, body {
    font-family: Helvetica Neue, Arial, sans-serif;
  }
`;

export default baseStyles;
