import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sortedByName } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';

import './SortingLineBig.scss';

type SortProps = {
  searchState: string;
}

const SortingLineBig: FC<SortProps> = ({ searchState }) => {
  const dispatch = useDispatch<AppDispatch>();
  const line = 2;

  return (
    <div className="sorting__big--line">
      <p className="search__big--information">
        Search results for
        {' '}
        {searchState}
      </p>
      <label className="sorting__big--lable" htmlFor="sorting">
        Sort by:
        {' '}
        <select
          className="sorting__big--options"
          name="sorting"
          id="sorting"
          onChange={(event) => { dispatch(sortedByName(event.target.value)); }}
        >
          <option value="default">Select</option>
          <option value="asc">Name (A-B)</option>
          <option value="desc">Name (B-A)</option>
        </select>

      </label>
    </div>
  );
};

export default SortingLineBig;
