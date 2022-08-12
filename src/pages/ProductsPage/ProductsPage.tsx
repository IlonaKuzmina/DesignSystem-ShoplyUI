import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import SortingLineBig from '../../component/SortingLineBig/SortingLineBig';
import SortingLineSmall from '../../component/SortingLineSmall/SortingLineSmall';
import {
  addToCart, countAllInCart, searchByName, sortedByName,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './ProductsPage.scss';
import ModalFilterBlock from '../../component/ModalFilterBlock/ModalFilterBlock';
import ProductsMainFilterBlock from '../../component/ProductsMainFilterBlock/ProductsMainFilterBlock';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filterOpen]);

  const showMoreItems = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <>
      <NavigationLine link="products" />
      <div className="products__page--container">
        {filterOpen ? (
          <ModalFilterBlock closeModal={() => { setFilterOpen(false); }} />
        ) : (
          <ProductsMainFilterBlock />
        )}

        <div className="right__side--container">
          <input
            className="search__input"
            type="text"
            placeholder="Search by subcategory..."
            onChange={(event) => { setSearchState(event.target.value); dispatch(searchByName(event.target.value)); }}
          />

          <MediaQuery maxWidth={600}>
            <SortingLineSmall onClick={() => { setFilterOpen(true); }} />
          </MediaQuery>

          <MediaQuery minWidth={601}>
            <SortingLineBig searchState={searchState} />
          </MediaQuery>

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
                      onClick={() => { dispatch(addToCart(Number(id))); dispatch(countAllInCart()); }}
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
            <Button
              onClick={showMoreItems}
              padding="13px 16px"
              label="load more"
              primary
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
