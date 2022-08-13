import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import SortingLineBig from '../../component/SortingLineBig/SortingLineBig';
import SortingLineSmall from '../../component/SortingLineSmall/SortingLineSmall';
import { searchByName } from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './ProductsPage.scss';
import ModalFilterBlock from '../../component/ModalFilterBlock/ModalFilterBlock';
import ProductsMainFilterBlock from '../../component/ProductsMainFilterBlock/ProductsMainFilterBlock';
import ScrollUpButton from '../../component/ScrollUpButton/ScrollUpButton';
import ProductCard from '../../component/ProductCard/ProductCard';
import { ProductData } from '../../data/productData';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const dispatch = useDispatch<AppDispatch>();
  const [searchState, setSearchState] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const [productList, setProductList] = useState<ProductData[]>();

  const [filter, setFilter] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 5000,
  });

  const showMoreItems = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const getFilteredAndSortedProductsList = () => {
    const newProdList = products.items;
    if (filter.category === '') {
      setProductList(newProdList);
    } else {
      setProductList(newProdList.filter(({ category, price }) => category
        === filter.category
        && price >= filter.minPrice
          && price <= filter.maxPrice));
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

  const updateChekedCategory = (cat: any) => {
    setFilter({ ...filter, category: cat });
  };

  const clearFilteredValues = () => {
    setFilter({ minPrice: 0, maxPrice: 5000, category: '' });
  };

  useEffect(() => { getFilteredAndSortedProductsList(); }, [filter]);

  return (
    <>
      <NavigationLine link="products" />
      <div className="products__page--container">
        {filterOpen ? (
          <ModalFilterBlock
            closeModal={() => { setFilterOpen(false); }}
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
            {productList && productList
              .slice(0, visibleProducts)
              .map(({
                image, id, name, price,
              }) => (
                <ProductCard
                  name={name}
                  image={image}
                  id={id}
                  price={price}
                />
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
      <ScrollUpButton />
    </>
  );
};

export default ProductPage;
