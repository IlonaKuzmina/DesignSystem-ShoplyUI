import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import './ModalFilterBlock.scss';

type ModalFilterBlockProps = {
  onCloseModal: () => void;
  clearFilteredValues: () => void;
  updateChekedCategory: (category: string) => void;
  updateMinPrice: (min: string) => void;
  updateMaxPrice: (max: string) => void;
}

const ModalFilterBlock: FC<ModalFilterBlockProps> = ({
  onCloseModal, clearFilteredValues, updateChekedCategory, updateMinPrice, updateMaxPrice,
}) => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleCategory, setVisibleCategory] = useState(2);
  const [maxP, setMaxP] = useState('');
  const [minP, setMinP] = useState('');

  const showMoreCategory = () => {
    setVisibleCategory((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="modal__block--container active">

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="tittle__block--wrapper">
            <h2 className="tittle__block--title">Filter</h2>
            <button className="tittle__block--close" onClick={onCloseModal}>x</button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="category__block--wrapper">
            <h4 className="category__block--title">Product category</h4>

            <div className="category__list--container">
              {products && products.items
                .filter(({ category }, index, a) => a.findIndex((e) => category === e.category) === index)
                .slice(0, visibleCategory)
                .map(({ category, id }) => (
                  <label className="modal__category--label" key={id} htmlFor={category}>
                    {' '}
                    {category}
                    <input
                      id="modal-shadow"
                      className="modal__category--radio"
                      key={id}
                      type="radio"
                      name="category"
                      value={category}
                      onChange={(e) => { updateChekedCategory(e.target.value); }}
                    />
                  </label>
                ))}
            </div>

            <button className="category__button--others" onClick={() => showMoreCategory()}>
              Others
              {' '}
              <img className="others__arrow" src="/assets/icons/others.svg" alt="others" />
            </button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="price__block--wrapper">
            <h4 className="price__block--title">Price range</h4>
            <div className="price__range--wrapper">
              <input
                className="price__input"
                type="number"
                placeholder="Min"
                onChange={(e) => setMinP(e.target.value)}
              />
              <input
                className="price__input"
                type="number"
                placeholder="Max"
                onChange={(e) => setMaxP(e.target.value)}
              />
            </div>

            <button
              className="price__button--set"
            >
              Set price

            </button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="filter__button--wrapper">
            <button
              className="filter__button--clear"
              onClick={clearFilteredValues}
            >
              Clear Filter

            </button>
            <button
              className="filter__button--apply"
              onClick={() => { updateMinPrice(minP); updateMaxPrice(maxP); onCloseModal(); }}
            >
              Apply

            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModalFilterBlock;
