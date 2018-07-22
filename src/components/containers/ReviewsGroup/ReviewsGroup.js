import React, { Fragment } from 'react';

import ReviewsList from '../../stateless/ReviewsList';
import {
  groupReviews,
  filterReviews,
  searchReviews,
  groupTerms,
  orderTerm,
} from '../../../utils';

import { Centralizer } from '../App/style';

const ReviewsGroup = ({
  reviews,
  searchTerm,
  groupingTerm,
  orderTerm,
  stars,
}) => {
  const searchedReviews = searchReviews(reviews, searchTerm.toLowerCase());
  const filteredReviews = filterReviews(searchedReviews, stars);
  const reviewsGrouped = groupReviews(filteredReviews, groupingTerm, orderTerm);

  const renderGroups = groupingTerm => {
    if (groupingTerm === groupTerms.none.name) {
      return <ReviewsList reviews={reviewsGrouped} />;
    } else {
      return Object.keys(reviewsGrouped).sort().map(group => {
        return (
          <div key={group}>
            <h1>{group}</h1>
            <ReviewsList reviews={reviewsGrouped[group]} />
          </div>
        );
      })
    }
  }

  return (
    <div>
      {`Displaying ${filteredReviews.length} reviews`}
      {filteredReviews.length > 0 ? renderGroups(groupingTerm) : (
        <Centralizer>
          <h4>Sorry no reviews matched your criteria</h4>
        </Centralizer>
      )}
    </div>
  );
}

export default ReviewsGroup;
