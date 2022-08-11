import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import {
  addCount, addToCart, searchByName, sortedByName,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './ProductsPage.scss';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [visibleCategory, setVisibleCategory] = useState(2);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  // }, [searchState]);

  const showMoreItems = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const showMoreCategory = () => {
    setVisibleCategory((prevVisible) => prevVisible + 10);
  };

  return (
    <>
      <NavigationLine link="products" />
      <div className="products__container">

        <div className="left__side--container">
          <h2 className="left__side--title">Filter</h2>

          <div>
            <h4 className="category__title">Product category</h4>
            <div className="category__wrapper">
              {products && products.items.slice(0, visibleCategory).map(({ category, id }) => (
                <label className="category__label" key={id} htmlFor={category}>
                  {' '}
                  {category}
                  <input type="checkbox" />
                </label>
              ))}

              <button className="others__button" onClick={() => showMoreCategory()}>Others</button>
            </div>

          </div>

          <div>
            <h4 className="range__title">Price range</h4>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <Button label="set price" primary padding="5px 15px" />
          </div>
          <Button label="clear filter" padding="5px 15px" />
        </div>

        <div className="right__side--container">
          <input
            className="search__input"
            type="text"
            placeholder="Search by subcategory..."
            onChange={(event) => { setSearchState(event.target.value); dispatch(searchByName(event.target.value)); }}
          />

          <div className="sorting__line">
            <p>
              Search results for
              {' '}
              {searchState}
            </p>
            <label htmlFor="sorting">
              Sort by:
              {' '}
              <select
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

          <div className="products__cards--container">
            {products && products.items.slice(0, visibleProducts).map(({
              image, id, name, price,
            }) => (
              <div className="product__card--wrapper" key={id}>
                <div
                  key={id}
                  className="card"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="button__wrapper">
                    <button
                      className="products__button--detail"
                      onClick={() => {
                        navigate(`/product/${id}`);
                      }}
                    >
                      detail

                    </button>
                    <button
                      className="products__button--cart"
                      onClick={() => { dispatch(addToCart(id)); dispatch(addCount(id)); }}
                    >
                      <img className="icon__button--cart" src="/assets/icons/cart.svg" alt="Cart" />

                    </button>
                  </div>
                </div>

                <div className="product__info">
                  <span>{name}</span>
                  <strong>
                    $
                    {' '}
                    {price}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          <div className="more__button--wrapper">
            <Button onClick={showMoreItems} padding="13px 16px" label="load more" primary />
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductPage;
