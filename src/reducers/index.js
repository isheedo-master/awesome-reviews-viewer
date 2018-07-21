import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function isAppLoading(state = false, action) {
  switch (action.type) {
    case actionTypes.IS_APP_LOADING:
      return action.status;
  }
  return state;
}

function isAppFetching(state = false, action) {
  switch (action.type) {
    case actionTypes.IS_FETCHING:
      return action.status;
  }
  return state;
}

function hasMore(state = true, action) {
  switch (action.type) {
    case actionTypes.HAS_MORE:
      return action.status;
  }
  return state;
}

function reviews(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_REVIEWS:
      return state.concat(action.reviews);
  }
  return state;
}

function nextPage(state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_REVIEWS:
      return state + 1;
  }
  return state;
}

export default combineReducers({
  isAppLoading,
  isAppFetching,
  reviews,
  nextPage,
  hasMore,
});
