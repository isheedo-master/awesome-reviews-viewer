import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import FontAwesome from 'react-fontawesome';

import {
  actionSetAppLoading,
  actionFetchReviews,
  actionSetAppFetching,
  actionIncrementPage,
} from '../../../actions';
import {
  AppWrapper,
  Centralizer
} from './style';
import baseStyles from '../../../styles/baseStyles';
import Loader from '../../stateless/Loader';
import ReviewsList from '../../stateless/ReviewsList';


class App extends Component {
  componentDidMount() {
    const { dispatch, reviews, nextPage } = this.props;

    if (reviews.length === 0) {
      dispatch(actionSetAppLoading(true));
      dispatch(actionFetchReviews(nextPage, this.incrementPage()));
    }
    window.addEventListener('scroll', throttle(this.onScroll, 1000));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.onScroll, 1000));
  }

  incrementPage = () => {
    const { dispatch, isAppFetching} = this.props;
    if(!isAppFetching ) {
      dispatch(actionIncrementPage());
    }
  }

  onScroll = () => {
    const { dispatch, nextPage, hasMore } = this.props;

    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight) &&
      this.props.reviews.length && !this.props.isAppFetching && hasMore
    ) {
      dispatch(actionSetAppFetching(true));
      window.scrollTo(0, document.body.scrollHeight);
      dispatch(actionFetchReviews(nextPage, this.incrementPage()));
    }
  }


  render() {
    baseStyles();
    const { isAppFetching, reviews, hasMore } = this.props;

    return (
      <AppWrapper>
        <ReviewsList reviews={reviews} />
        {hasMore ? (
          isAppFetching && (
          <Centralizer>
            <FontAwesome name="sun-o" spin size="4x" />
          </Centralizer>
        )) : (
          <Centralizer>
              UH-OH! SEEMS YOU'VE READ ALL REVIEWS!
          </Centralizer>
        )}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  reviews: PropTypes.array.isRequired,
  isAppLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  isAppLoading: state.isAppLoading,
  isAppFetching: state.isAppFetching,
  nextPage: state.nextPage,
  hasMore: state.hasMore,
});

export default connect(mapStateToProps)(
  Loader('isAppLoading', 'LOADING REVIEWS')
  (App)
);
