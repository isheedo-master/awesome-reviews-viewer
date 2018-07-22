
import superagent from 'superagent';
import config from '../../config';

export const actionTypes = {
  IS_APP_LOADING: 'IS_APP_LOADING',
  IS_FETCHING: 'IS_FETCHING',
  SET_REVIEWS: 'SET_REVIEWS',
  SET_NEXT_PAGE: 'SET_NEXT_PAGE',
  HAS_MORE: 'HAS_MORE',
};

// Actions to request data

export function actionFetchReviews(id, callback) {
  return (dispatch) => {
    superagent
      .get(`/api/${id}`)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.warn('Error: ', err);
        } else {
          dispatch(actionSetReviews(res.body.reviews, dispatch));
          dispatch(actionSetHasMore(res.body.hasMore));
          dispatch(actionSetAppLoading(false));
          if (res.body.hasMore) callback;
        }
      });
  };
}

// Actions to set data

export function actionSetReviews(reviews, dispatch) {
  dispatch(actionSetAppFetching(false));
  return {
    type: actionTypes.SET_REVIEWS,
    reviews,
  };
}

// Actions to set statuses

export function actionIncrementPage() {
  return {
    type: actionTypes.SET_NEXT_PAGE,
  };
}

export function actionSetAppLoading(status) {
  return {
    type: actionTypes.IS_APP_LOADING,
    status,
  };
}

export function actionSetAppFetching(status) {
  return {
    type: actionTypes.IS_FETCHING,
    status,
  };
}

export function actionSetHasMore(status) {
  return {
    type: actionTypes.HAS_MORE,
    status,
  };
}
