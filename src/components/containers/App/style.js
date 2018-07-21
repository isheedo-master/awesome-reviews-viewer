import styled, { keyframes } from 'styled-components';

import { mainColors } from '../../../styles/variables';

const { baseAccentColor, baseBgColor } = mainColors;


export const AppWrapper = styled.main`
  padding: 0 1rem;
`;

export const Centralizer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 1rem;
  color: ${baseAccentColor};
`
