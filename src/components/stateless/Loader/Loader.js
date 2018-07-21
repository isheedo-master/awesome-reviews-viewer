import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { LoaderWrapper } from './style';

const Loader = (isLoading, loadingText) => (WrappedComponent) => {
  return class Loader extends Component {
    render() {
      return this.props[isLoading] ? (
        <LoaderWrapper>
          <FontAwesome name="sun-o" spin size="4x" />
          {loadingText && (
            <p>{loadingText}</p>
          )}
        </LoaderWrapper>
      ) : <WrappedComponent {...this.props} />;
    }
  }
}

export default Loader;
