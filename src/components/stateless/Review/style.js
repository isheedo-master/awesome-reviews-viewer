import styled, { keyframes } from 'styled-components';

import { mainColors } from '../../../styles/variables';

const { baseBorderColor, baseBgColor } = mainColors;

export const ReviewBody = styled.article`
  background-color: ${baseBgColor};
  border: 1px solid ${baseBorderColor};
  margin-bottom: 1rem;
`;


