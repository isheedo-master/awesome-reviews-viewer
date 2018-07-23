import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { times } from 'lodash';

import { groupTerms, orderTerms } from '../../../utils';
import {
	Button,
	Input,
	Select
} from '../../../styles/baseStyles';

import {
	SelectWrapper,
	FilterBar,
	StarsFiler,
	CheckBox,
	FiltersLabel
} from './style';

const Filters = ({
	onFilterChange,
	onReset,
	stars,
	searchTerm,
	orderTerm,
	groupingTerm,
}) => {
	const renderSearcField = () => (
		<Input
			id='search'
			name='search'
			type='text'
			placeholder="Search..."
			value={searchTerm}
			onChange={e => onFilterChange(e, 'searchTerm')}
		/>
	);

	const renderGroupSelect = () => (
		<Select
			name="groupBy"
			id="groupBy"
			onChange={e => onFilterChange(e, 'groupingTerm')}
			value={groupingTerm}
		>
			{
				Object.keys(groupTerms).map(term => {
					if (groupTerms && Object.prototype.hasOwnProperty.call(groupTerms, term)) {
						return (
							<option
								key={groupTerms[term].name}
								value={groupTerms[term].name}
							>
								{groupTerms[term].label}
							</option>
						);
					}
				})
			}
		</Select>
	);

	const renderOrderSelect = () => (
		<Select
			name="orderBy"
			id="orderBy"
			onChange={e => onFilterChange(e, 'orderTerm')}
			value={orderTerm}
		>
			{
				Object.keys(orderTerms).map(term => {
					if (orderTerms && Object.prototype.hasOwnProperty.call(orderTerms, term)) {
						return (
							<option
								key={orderTerms[term].name}
								value={orderTerms[term].name}
							>
								{orderTerms[term].label}
							</option>
						);
					}
				})
			}
		</Select>
	);

	const renderStarsFilter = () => {
		return (
			<StarsFiler>
				<FiltersLabel>FILTER BY:</FiltersLabel>
				{times(5, i => (
					<CheckBox key={i + 1} data-checked={(i + 1) <= stars}>
						<label htmlFor={i + 1} >
							<input
								type="checkbox"
								value={i + 1}
								id={i + 1}
								name={i + 1}
								checked={(i + 1) <= stars}
								onChange={e => onFilterChange(e, 'stars')}
							/>
							{i+1}<FontAwesome name="star" />
						</label>
					</CheckBox>
				))}
			</StarsFiler>
		);
	};

	const renderResetButton = () => {
		return <Button onClick={onReset}>Refresh</Button>;
	};
	return (
		<FilterBar>
			{renderSearcField()}
			<SelectWrapper>
				{renderGroupSelect()}
				{renderOrderSelect()}
			</SelectWrapper>
			{renderStarsFilter()}
			{renderResetButton()}
		</FilterBar>
	);
};

Filters.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	stars: PropTypes.number.isRequired,
	searchTerm: PropTypes.string.isRequired,
	orderTerm: PropTypes.string.isRequired,
	groupingTerm: PropTypes.string.isRequired,
};

export default Filters;
