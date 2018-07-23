import React from 'react';
import PropTypes from 'prop-types';

import Review from '../Review';

const ReviewsList = ({reviews}) => {
	return (
		<div>
			{reviews && reviews.map(review => (
				<Review key={review.reviewId} review={review} />
			))}
		</div>
	);
};

ReviewsList.propTypes = {
	reviews: PropTypes.array.isRequired,
};

export default ReviewsList;

