import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sortedByName } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';

import './SortingLineSmall.scss';

type SortProps = {
    onClick?: () => void;
}

const SortingLineSmall: FC<SortProps> = ({ onClick }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
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
            onChange={(event) => { dispatch(sortedByName(event.target.value)); }}
          >
            <option value="default">Select</option>
            <option value="asc">Name (A-B)</option>
            <option value="desc">Name (B-A)</option>
          </select>
        </label>
      </div>

    </div>
  );
};

export default SortingLineSmall;
