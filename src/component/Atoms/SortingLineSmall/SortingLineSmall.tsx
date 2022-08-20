import { FC } from 'react';

import './SortingLineSmall.scss';

type SortProps = {
  onClick?: () => void;
  sortedByName: (option: string) => void;
}

const SortingLineSmall: FC<SortProps> = ({ onClick, sortedByName }) => (
  <div className="sorting__small--line">
    <div className="filtr__counter">
      <span>Filter(4)</span>
    </div>

    <div>
      <button
        onClick={onClick}
        className="filtr__icon--btn"
      >
        <img src="/assets/icons/filtr_btn.svg" alt="filtr" />
      </button>
    </div>

    <div>
      <label htmlFor="sorting">
        <select
          className="sorting__small--options"
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

  </div>
);

export default SortingLineSmall;
