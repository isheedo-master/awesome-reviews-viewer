import styled from 'styled-components';

import { mainColors } from '../../../styles/variables';

const { baseBorderColor, baseBgColor } = mainColors;

export const ReviewBody = styled.article`
  background-color: white;
  border: 1px solid ${baseBgColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
`;

export const ImagePLaceholder = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: ${baseBgColor};
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  .review__date,
  .review__stars,
  .review__id {
    flex: none;
    min-width: 100px;
    margin-left: 2rem;
  }
`;

export const InfoLabel = styled.p`
  color: ${baseBorderColor};
  font-size: 0.8rem;
  margin-bottom: 0;
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1rem;

  strong {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
  }
`;






