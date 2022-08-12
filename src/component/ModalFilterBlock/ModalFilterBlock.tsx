import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import './ModalFilterBlock.scss';

type ModalFilterBlockProps = {
    closeModal?: () => void;
}

const ModalFilterBlock: FC<ModalFilterBlockProps> = ({ closeModal }) => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleCategory, setVisibleCategory] = useState(2);

  const showMoreCategory = () => {
    setVisibleCategory((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="modal__block--container active">

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="tittle__block--wrapper">
            <h2 className="tittle__block--title">Filter</h2>
            <button className="tittle__block--close" onClick={closeModal}>x</button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="category__block--wrapper">
            <h4 className="category__block--title">Product category</h4>

            <div className="category__list--container">
              {products && products.items.slice(0, visibleCategory).map(({ category, id }) => (
                <label className="modal__category--label" key={id} htmlFor={category}>
                  {' '}
                  {category}
                  <input type="checkbox" />
                </label>
              ))}
            </div>

            <button className="category__button--others" onClick={() => showMoreCategory()}>
              Others
              {' '}
              <img className="others__arrow" src="./assets/icons/others.svg" alt="others" />
            </button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="price__block--wrapper">
            <h4 className="price__block--title">Price range</h4>
            <div className="price__range--wrapper">
              <input className="price__input" type="text" placeholder="Min" />
              <input className="price__input" type="text" placeholder="Max" />
            </div>

            <button className="price__button--set">Set price</button>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="filter__button--wrapper">
            <button className="filter__button--clear">Cleare filtr</button>
            <button className="filter__button--apply" onClick={closeModal}>Apply</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModalFilterBlock;
