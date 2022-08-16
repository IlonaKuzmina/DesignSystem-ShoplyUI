import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import SortingLineBig from '../../component/SortingLineBig/SortingLineBig';
import SortingLineSmall from '../../component/SortingLineSmall/SortingLineSmall';
import { RootState } from '../../reducer/store';
import './ProductsPage.scss';
import ModalFilterBlock from '../../component/ModalFilterBlock/ModalFilterBlock';
import ProductsMainFilterBlock from '../../component/ProductsMainFilterBlock/ProductsMainFilterBlock';
import ScrollUpButton from '../../component/ScrollUpButton/ScrollUpButton';
import ProductCard from '../../component/ProductCard/ProductCard';
import { ProductData } from '../../data/productData';
import ProductNotFound from '../../component/ProductNotFound/ProductNotFound';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [searchState, setSearchState] = useState('');
  const [modalFilterOpen, setModalFilterOpen] = useState(false);
  const [productList, setProductList] = useState<ProductData[]>();

  const [filter, setFilter] = useState({
    category: 'clear',
    minPrice: 0,
    maxPrice: 0,
    sortOption: '',
  });

  const showMoreItems = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const getFilteredAndSortedProductsList = () => {
    const newProdList = products.items;
    const searchedByName = searchState.toLowerCase();
    const categoryIsSets = filter.category !== 'clear';
    const maxPriceIsSets = filter.maxPrice > 0;
    const filteredProductsByName = newProdList.filter(({ name }) => name.toLowerCase().includes(searchedByName));

    switch (filter.sortOption) {
      case 'asc':
        if (categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ category, price, name }) => category === filter.category
            && price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => a.name.localeCompare(b.name)));
        } else if (!categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ price, name }) => price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => a.name.localeCompare(b.name)));
        } else if (categoryIsSets) {
          setProductList(filteredProductsByName.filter(({ category, name }) => category === filter.category
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => a.name.localeCompare(b.name)));
        } else {
          setProductList(filteredProductsByName.sort((a: any, b: any) => a.name.localeCompare(b.name)));
        }
        break;
      case 'desc':
        if (categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ category, price, name }) => category === filter.category
            && price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => b.name.localeCompare(a.name)));
        } else if (!categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ price, name }) => price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => b.name.localeCompare(a.name)));
        } else if (categoryIsSets) {
          setProductList(filteredProductsByName.filter(({ category, name }) => category === filter.category
            && name.toLowerCase().includes(searchedByName)).sort((a: any, b: any) => b.name.localeCompare(a.name)));
        } else {
          setProductList(filteredProductsByName.sort((a: any, b: any) => b.name.localeCompare(a.name)));
        }
        break;
      default:
        if (categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ category, price, name }) => category === filter.category
            && price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)));
        } else if (!categoryIsSets && maxPriceIsSets) {
          setProductList(filteredProductsByName.filter(({ price, name }) => price >= filter.minPrice
            && price <= filter.maxPrice
            && name.toLowerCase().includes(searchedByName)));
        } else if (categoryIsSets) {
          setProductList(filteredProductsByName.filter(({ category, name }) => category === filter.category
            && name.toLowerCase().includes(searchedByName)));
        } else {
          setProductList(filteredProductsByName);
        }
    }
  };

  const updateMinPrice = (min: string) => {
    const minPri = Number(min);
    setFilter({ ...filter, minPrice: minPri });
  };

  const updateMaxPrice = (max: string) => {
    const maxPri = Number(max);
    setFilter({ ...filter, maxPrice: maxPri });
  };

  const updateChekedCategory = (categor: any) => {
    setFilter({ ...filter, category: categor });
  };

  const updateSortStatus = (sort: any) => {
    setFilter({ ...filter, sortOption: sort });
  };

  const clearFilteredValues = () => {
    setFilter({
      minPrice: 0, maxPrice: 0, category: 'clear', sortOption: '',
    });
  };

  useEffect(() => { getFilteredAndSortedProductsList(); }, [filter, searchState]);

  return (
    <>
      <NavigationLine link="products" />
      <div className="products__page--container">
        {modalFilterOpen ? (
          <ModalFilterBlock
            onCloseModal={() => { setModalFilterOpen(false); }}
            clearFilteredValues={clearFilteredValues}
            updateChekedCategory={updateChekedCategory}
            updateMinPrice={updateMinPrice}
            updateMaxPrice={updateMaxPrice}
          />
        ) : (
          <ProductsMainFilterBlock
            clearFilteredValues={clearFilteredValues}
            updateChekedCategory={updateChekedCategory}
            updateMinPrice={updateMinPrice}
            updateMaxPrice={updateMaxPrice}
          />
        )}

        <div className="right__side--container">
          <input
            className="search__input"
            type="text"
            placeholder="Search by product name..."
            onChange={(e) => { setSearchState(e.target.value); }}
          />

          <MediaQuery maxWidth={600}>
            <SortingLineSmall onClick={() => { setModalFilterOpen(true); }} sortedByName={updateSortStatus} />
          </MediaQuery>

          <MediaQuery minWidth={601}>
            <SortingLineBig searchState={searchState} sortedByName={updateSortStatus} />
          </MediaQuery>

          <div className="card__container">
            {productList && productList.length > 0 ? (
              <div className="products__cards--container">
                {productList && productList.slice(0, visibleProducts)
                  .map(({
                    image, id, name, price,
                  }) => (
                    <ProductCard
                      key={id}
                      name={name}
                      image={image}
                      id={id}
                      price={price}
                    />
                  ))}

              </div>
            ) : (
              <div className="notfound__msg--container">
                <ProductNotFound />
              </div>
            )}

          </div>
          {productList && productList.length !== 0 ? (
            <div className="more__button--wrapper">
              <Button
                onClick={showMoreItems}
                padding="13px 16px"
                label="load more"
                primary
              />
            </div>
          ) : <span />}

        </div>
      </div>
      <ScrollUpButton />
      {/* <div className="toast toast-grey">
        <span className="toast__text">Product is added in cart!</span>
        <span className="toast__close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99999 4.586L10.243 0.343003C10.6335 -0.0474629 11.2665 -0.0474638 11.657 0.343002V0.343002C12.0475 0.733467 12.0475 1.36654 11.657 1.757L7.41399 6L11.657 10.243C12.0475 10.6335 12.0475 11.2665 11.657 11.657V11.657C11.2665 12.0475 10.6335 12.0475 10.243 11.657L5.99999 7.414L1.75699 11.657C1.36652 12.0475 0.733452 12.0475 0.342986 11.657V11.657C-0.0474791 11.2665 -0.0474789 10.6335 0.342987 10.243L4.58599 6L0.342987 1.757C-0.0474782 1.36654 -0.0474791 0.733467 0.342986 0.343002V0.343002C0.733452 -0.0474638 1.36652 -0.0474637 1.75699 0.343002L5.99999 4.586Z" fill="" />
          </svg>
        </span>
      </div> */}
    </>
  );
};

export default ProductPage;
