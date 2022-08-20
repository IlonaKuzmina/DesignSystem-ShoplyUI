import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../Atoms/Button/Button';
import NavigationLine from '../../Atoms/NavigationLine/NavigationLine';
import SortingLineBig from '../../Atoms/SortingLineBig/SortingLineBig';
import SortingLineSmall from '../../Atoms/SortingLineSmall/SortingLineSmall';
import { RootState } from '../../../reducer/store';
import './ProductsPage.scss';
import ModalFilterBlock from '../../Atoms/ModalFilterBlock/ModalFilterBlock';
import ProductsMainFilterBlock from '../../Atoms/ProductsMainFilterBlock/ProductsMainFilterBlock';
import ScrollUpButton from '../../Atoms/ScrollUpButton/ScrollUpButton';
import ProductCard from '../../Atoms/ProductCard/ProductCard';
import { ProductData } from '../../../data/products';
import ProductNotFound from '../../Atoms/ProductNotFound/ProductNotFound';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [searchState, setSearchState] = useState('');
  const [modalFilterOpen, setModalFilterOpen] = useState(false);
  const [productList, setProductList] = useState<ProductData[]>();
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    category: 'clear',
    minPrice: 0,
    maxPrice: 0,
    sortOption: '',
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const showMoreItems = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const getFilteredAndSortedProductsList = () => {
    const searchedProducts = products.items.filter(({ name, category, subcategory }) => name
      .toLowerCase()
      .includes(searchState.toLowerCase())
      || subcategory.toLowerCase().includes(searchState.toLowerCase())
      || category.toLowerCase().includes(searchState.toLowerCase()));
    const filteredItems = () => searchedProducts.filter(({ category, price }) => {
      const categoryMatch = category === filter.category || filter.category === 'clear';
      const minPriceMatch = price >= filter.minPrice || filter.minPrice === 0;
      const maxPriceMatch = price <= filter.maxPrice || filter.maxPrice === 0;
      return categoryMatch && minPriceMatch && maxPriceMatch;
    });

    const finalResult = filteredItems();

    switch (filter.sortOption) {
      case 'asc':
        setProductList(finalResult.sort((a: any, b: any) => a.name.localeCompare(b.name)));
        break;
      case 'desc':
        setProductList(finalResult.sort((a: any, b: any) => b.name.localeCompare(a.name)));
        break;
      default:
        setProductList(finalResult);
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
            placeholder="Search..."
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
                      onClick={() => {
                        navigate(`/product/${id}`);
                      }}
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
    </>
  );
};

export default ProductPage;
