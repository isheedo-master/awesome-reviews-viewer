import React from 'react';
import moment from 'moment';
import { times, truncate } from 'lodash';
import FontAwesome from 'react-fontawesome';

import {
	ReviewBody,
	ReviewHeader,
	ImagePLaceholder,
	ReviewContent,
	InfoLabel,
} from './style';

const Review = ({
	review: {
		reviewId,
		content,
		productTitle,
		reviewCreated,
		stars,
		title,
	}
}) => {
	return (
		<ReviewBody key={reviewId}>
			<ReviewHeader>
				<ImagePLaceholder />
				<div className="review__date">
					<InfoLabel>
            DATE:<br />
					</InfoLabel>
					{moment(reviewCreated).format('DD.MM.YYYY')}
				</div>
				<div className="review__stars">
					<InfoLabel>
            STARS:<br />
					</InfoLabel>
					{times(5, (i) => i < stars ? (
						<FontAwesome key={`${reviewId} ${i}`} name='star' />
					) : (
						<FontAwesome key={`${reviewId} ${i}`} name='star-o' />
					))}
				</div>
				<div className="review__id">
					<InfoLabel>
						{reviewId}<br />
					</InfoLabel>
					<span title={productTitle}>
						{truncate(productTitle, {
							'length': 30,
							'omission': '...',
						})}
					</span>
				</div>
			</ReviewHeader>
			<ReviewContent>
				<strong>{title}</strong>
				<p>
					{content}
				</p>
			</ReviewContent>
		</ReviewBody>
	);
};

export default Review;
