import React from 'react';
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

export default ReviewsList;

