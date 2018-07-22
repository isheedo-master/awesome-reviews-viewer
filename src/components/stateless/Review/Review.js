import React from 'react';
import moment from 'moment';
import { ReviewBody } from './style';

const Review = ({
  review: {reviewId,
  content,
  productTitle,
  reviewCreated
}
}) => {
  return (
    <ReviewBody key={reviewId}>
      <h4>{productTitle}</h4>
      <p>{moment(reviewCreated).format('DD.MMMM.YYYY')}</p>
      {content}
    </ReviewBody>
  );
}

export default Review;
