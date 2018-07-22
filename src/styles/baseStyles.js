import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { mainColors } from './variables';

const { baseAccentColor, baseBgColor, baseBorderColor } = mainColors;


const baseStyles = () => injectGlobal`
  ${reset}

  :root, html, body {
    font-family: Helvetica Neue, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
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

  a {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: ${baseBorderColor};
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s ease-in;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${baseAccentColor};
  }

  &:hover {
    background-color: ${baseAccentColor};
  }
`;

export const Input = styled.input`
  color: ${baseAccentColor};
  border: 1px solid ${baseAccentColor};
  border-radius: 2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow:inset 0 0 4px ${baseAccentColor};
  }

  &::-webkit-input-placeholder {
    color: ${baseAccentColor};
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  position: relative;
  color: ${baseAccentColor};
  background-color: white;
  border: 1px solid ${baseAccentColor};
  border-radius: 2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  appearance: none;

  &::after {
    content: '▾';
    display: block;
  }

  &:focus {
    outline: none;
    box-shadow:inset 0 0 4px ${baseAccentColor};
  }
`;

export default baseStyles;
