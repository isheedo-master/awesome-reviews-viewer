import styled, { keyframes } from 'styled-components';

import { mainColors } from '../../../styles/variables';

const { baseAccentColor } = mainColors;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 30px 0;
  color: ${baseAccentColor};
  .fa {
    margin-bottom: 0.5rem;
  }
`;
