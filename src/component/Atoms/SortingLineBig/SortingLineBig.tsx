import React, { FC } from 'react';

import './SortingLineBig.scss';

type SortProps = {
  searchState: string;
  sortedByName: (oprion: string) => void;
}

const SortingLineBig: FC<SortProps> = ({ searchState, sortedByName }) => {
  const c = 2;

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
          onChange={(e) => { sortedByName(e.target.value); }}
        >
          <option value="default">Default order</option>
          <option value="asc">Name (A-B)</option>
          <option value="desc">Name (B-A)</option>
        </select>

      </label>
    </div>
  );
};

export default SortingLineBig;
