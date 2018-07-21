import React from 'react';

import { ReviewBody } from './style';

const Review = ({
  review: {reviewId,
  content,
  productTitle}
}) => {
  return (
    <ReviewBody key={reviewId}>
      <h4>{productTitle}</h4>
      {content}
    </ReviewBody>
  );
}

export default Review;
