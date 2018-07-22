import React from 'react';

import ReviewsList from '../../stateless/ReviewsList';
import Loader from '../../stateless/Loader';
import {
  groupReviews,
  filterReviews,
  searchReviews,
  groupTerms,
} from '../../../utils';

import { Centralizer } from '../App/style';
import { ReviewsIndicator } from './style';

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
            <ReviewsIndicator>{group}</ReviewsIndicator>
            <ReviewsList reviews={reviewsGrouped[group]} />
          </div>
        );
      })
    }
  }

  return (
    <div>
      <ReviewsIndicator>{`Displaying ${filteredReviews.length} reviews:`}</ReviewsIndicator>
      {filteredReviews.length > 0 ? renderGroups(groupingTerm) : (
        <Centralizer>
          <h4>Sorry no reviews matched your criteria</h4>
        </Centralizer>
      )}
    </div>
  );
}

export default Loader('isAppLoading', 'LOADING REVIEWS')(ReviewsGroup)
