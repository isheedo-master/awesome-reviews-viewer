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
import { groupTerms, orderTerms } from '../../../utils';

import {
  AppWrapper,
  Centralizer
} from './style';
import baseStyles from '../../../styles/baseStyles';

import Filters from '../../stateless/Filters';
import ReviewsGroup from '../ReviewsGroup';


const initialState = {
  groupingTerm: groupTerms.none.name,
  stars: 5,
  searchTerm: '',
  orderTerm: orderTerms.desc.name,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

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

  backToTop = () => {
    window.scrollTo(0, 0);
  }

  onFilterChange = (e, stateKey) => {
    this.setState({
      [stateKey]: e.target.value,
    });
  }

  onReset = () => {
    this.setState({
      ...initialState,
    })
  }


  render() {
    baseStyles();
    const { isAppFetching, isAppLoading, reviews, hasMore } = this.props;
    const { groupingTerm, stars, searchTerm, orderTerm } = this.state;

    return (
      <AppWrapper>
        <Filters
          stars={stars}
          searchTerm={searchTerm}
          groupingTerm={groupingTerm}
          orderTerm={orderTerm}
          onFilterChange={this.onFilterChange}
          onReset={this.onReset}
        />
        <ReviewsGroup
          reviews={reviews}
          groupingTerm={groupingTerm}
          stars={stars}
          searchTerm={searchTerm}
          orderTerm={orderTerm}
          isAppLoading={isAppLoading}
        />
        {hasMore ? (
          isAppFetching && (
          <Centralizer>
            <FontAwesome name="sun-o" spin size="4x" />
          </Centralizer>
        )) : (
          <Centralizer>
            <a onClick={this.backToTop}>Back to top</a>
          </Centralizer>
        )}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  reviews: PropTypes.array.isRequired,
  isAppLoading: PropTypes.bool.isRequired,
  isAppFetching: PropTypes.bool.isRequired,
  nextPage: PropTypes.number.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  isAppLoading: state.isAppLoading,
  isAppFetching: state.isAppFetching,
  nextPage: state.nextPage,
  hasMore: state.hasMore,
});

export default connect(mapStateToProps)(App);
