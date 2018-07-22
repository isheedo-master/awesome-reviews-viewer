import React from 'react';
import FontAwesome from 'react-fontawesome';
import { times } from 'lodash';
import { groupTerms, orderTerms } from '../../../utils';


const Filters = ({
  onFilterChange,
  onReset,
  stars,
  searchTerm,
  orderTerm
}) => {
  const renderSearcField = () => (
    <input
      id='search'
      name='search'
      type='text'
      placeholder="Search..."
      value={searchTerm}
      onChange={e => onFilterChange(e, 'searchTerm')}
    />
  );

  const renderGroupSelect = () => (
    <div>
      <select
        name="groupBy"
        id="groupBy"
        onChange={e => onFilterChange(e, 'groupingTerm')}
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
              )
            }
          })
        }
      </select>
    </div>
  );

  const renderOrderSelect = () => (
    <div>
      <select
        name="orderBy"
        id="orderBy"
        onChange={e => onFilterChange(e, 'orderTerm')}
        defaultValue={orderTerms[orderTerm].name}
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
              )
            }
          })
        }
      </select>
    </div>
  );

  const renderStarsFilter = () => {
    return (<div>
      {times(5, i => (
        <div key={i+1} >
          <label htmlFor={i+1}>
            <input
              type="checkbox"
              value={i+1}
              id={i+1}
              name={i+1}
              checked={(i+1) <= stars}
              onChange={e => onFilterChange(e, 'stars')}
            />
            {i+1}<FontAwesome name="star" />
          </label>
        </div>
      ))}
    </div>);
  }

  const renderResetButton = () => {
    return <button onClick={onReset}>Refresh</button>;
  }
  return (
    <div>
      {renderSearcField()}
      {renderGroupSelect()}
      {renderOrderSelect()}
      {renderStarsFilter()}
      {renderResetButton()}
    </div>
  );
}

export default Filters;
