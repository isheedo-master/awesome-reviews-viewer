import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
	};
};

Loader.propTypes = {
	WrappedComponent: PropTypes.element.isRequired,
	isLoading: PropTypes.bool.isRequired,
	loadingText: PropTypes.string.isRequired,
};

export default Loader;
