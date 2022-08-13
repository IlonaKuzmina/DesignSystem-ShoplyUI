import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import './ProductsMainFilterBlock.scss';

type ProductsMainFilterBlockProps = {
  children?: ReactNode;
  clearFilteredValues: () => void;
}

const ProductsMainFilterBlock: FC<ProductsMainFilterBlockProps> = ({ children, clearFilteredValues }) => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleCategory, setVisibleCategory] = useState(2);
  const [minP, setMinP] = useState('');
  const [maxP, setMaxP] = useState('');
  const [filteredData, setFilteredData] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => { }, []);

  const showOthersCategory = () => {
    setVisibleCategory((prevVisible) => prevVisible + 5);
  };

  // const clearFilteredValues = () => {
  //   setFilteredData({ minPrice: '', maxPrice: '', category: '' });
  // };

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
              {products && products.items
                .filter(({ category }, index, a) => a.findIndex((e) => category === e.category) === index)
                .slice(0, visibleCategory)
                .map(({ category, id }) => (
                  <label className="category__label" key={id} htmlFor={category}>
                    {' '}
                    {category}
                    <input
                      key={id}
                      type="checkbox"
                      name={category}
                      value={category}
                      onChange={(e) => { setFilteredData({ ...filteredData, category: e.target.value }); }}
                    />
                  </label>
                ))}
            </div>

            <button className="category__button--others" onClick={() => showOthersCategory()}>
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
              <input
                className="main__price--input"
                type="text"
                placeholder="Min"
                onChange={(e) => setMinP(e.target.value)}
              />
              <input
                className="main__price--input"
                type="text"
                placeholder="Max"
                onChange={(e) => setMaxP(e.target.value)}
              />
            </div>

            <button
              className="main__button--set"
              onClick={() => { setFilteredData({ ...filteredData, minPrice: minP, maxPrice: maxP }); }}
            >
              Set price

            </button>
            <button
              className="main__button--clear"
              onClick={clearFilteredValues}
            >
              Clear Filter

            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductsMainFilterBlock;
