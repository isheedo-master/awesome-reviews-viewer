import { groupBy, orderBy } from 'lodash';
import moment from 'moment';

export const groupTerms = {
	none: {
		name: 'none',
		label: 'Group by',
	},
	day: {
		name:'day',
		label: 'Day',
	},
	week: {
		name: 'week',
		label: 'Week',
	},
	month: {
		name: 'month',
		label: 'Month',
	},
};

export const orderTerms = {
	asc: {
		name: 'asc',
		label: 'Ascending',
	},
	desc: {
		name: 'desc',
		label: 'Descending',
	},
};


export function groupReviews(reviews, groupTerm, orderTerm) {
	let processedReviews = reviews;

	switch (groupTerm) {
	case groupTerms.day.name:
		processedReviews = groupBy(
			orderBy(processedReviews, review => review.reviewCreated, orderTerm),
			review => moment(review.reviewCreated).format('dddd')
		);
		break;
	case groupTerms.month.name:
		processedReviews = groupBy(
			orderBy(processedReviews, review => review.reviewCreated, orderTerm),
			review => moment(review.reviewCreated).format('MMMM')
		);
		break;
	case groupTerms.week.name:
		processedReviews = groupBy(
			orderBy(processedReviews, review => review.reviewCreated, orderTerm),
			review => moment(review.reviewCreated).startOf('isoWeek').format('DD.MM')
		);
		break;
	case groupTerms.none.name:
	default:
		return orderBy(processedReviews, review => review.reviewCreated, orderTerm);
	}
	return processedReviews;
}

export function filterReviews(reviews, stars) {
	return reviews.filter(review => review.stars <= stars);
}

export function searchReviews(reviews, term) {
	return reviews.filter(review => {
		return term.lenght === 0 ||
    review.content.toLowerCase().indexOf(term) > -1 ||
    review.productTitle.toLowerCase().indexOf(term) > -1;
	});
}
