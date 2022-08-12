import React, { FC, ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import './ProductsMainFilterBlock.scss';

type ProductsMainFilterBlockProps = {
  children?: ReactNode;
}

const ProductsMainFilterBlock: FC<ProductsMainFilterBlockProps> = ({ children }) => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleCategory, setVisibleCategory] = useState(2);
  const [checkedValue, setCheckedValue] = useState([]);

  const showMoreCategory = () => {
    setVisibleCategory((prevVisible) => prevVisible + 10);
  };

  const getCheckedValue = (value:string) => {
    console.log(value);
  };

  return (

    <div className="main__filter--container">

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="main__title--wrapper">
            <h2 className="main__title">Filter</h2>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="main__category--wrapper">
            <h4 className="category__block--title">Product category</h4>

            <div className="category__list--container">
              {products && products.items.slice(0, visibleCategory).map(({ category, id }) => (
                <label className="category__label" key={id} htmlFor={category}>
                  {' '}
                  {category}
                  <input
                    type="checkbox"
                    name={category}
                    value={category}
                    onChange={(e) => { getCheckedValue(e.target.value); }}
                  />
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
          <div className="main__price--wrapper">
            <h4 className="price__block--title">Price range</h4>
            <div className="main__range--wrapper">
              <input className="main__price--input" type="text" placeholder="Min" />
              <input className="main__price--input" type="text" placeholder="Max" />
            </div>

            <button className="main__button--set">Set price</button>
            <button className="filter__button--clear">Cleare filtr</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductsMainFilterBlock;
