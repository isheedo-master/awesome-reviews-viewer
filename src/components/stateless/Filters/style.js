import styled, { keyframes } from 'styled-components';

import { mainColors } from '../../../styles/variables';

const { baseAccentColor, baseFontColor } = mainColors;

export const FilterBar = styled.section`
  margin: 1rem auto;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem auto;

  select {
    flex: none;
    width: calc(100% / 2 - 1.5rem);
    background: url('http://i60.tinypic.com/15nso5d.jpg') no-repeat;
    background-size: 10px 7px;
    background-position: calc(100% - 10px) 50%;
  }
`;

export const FiltersLabel = styled.p`
  color: ${baseFontColor};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  flex: none;
  width: 100%;
`;

export const StarsFiler = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const CheckBox = styled.div`
  position: relative;
  margin-right: 0.5rem;
  color: ${baseFontColor};
  padding-left: 20px;
  cursor: pointer;

  input {
    display: none;
  }

  label::before,
  label::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    border: 1px solid ${baseAccentColor};
    border-radius: 3px;
    height: 14px;
    width: 14px;
    cursor: pointer;
  }

  label::after {
    background-color: ${baseAccentColor};
    width: 10px;
    height: 10px;
    top: 2px;
    left: 2px;
    transform: scale(0);
    transform-origin: center center;
    transition: 0.15s ease-in;
    border-radius: 2px;
  }

  &[data-checked='true'] {
    color: ${baseAccentColor};

    label::after {
      transform: scale(1);
    }
  }
`;
