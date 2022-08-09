import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import ProductCard from '../../component/ProductCard/ProductCard';
import { RootState } from '../../reducer/store';
import './ProductsPage.scss';

const ProductPage = () => {
  const products = useSelector(({ product }: RootState) => product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigationLine link="products" />
      <div className="products__container">

        <div className="left__side--container">
          <h3>Filter</h3>
        </div>

        <div className="right__side--container">
          <input type="text" value="serach" />
          {/* <p>Search results for {search}</p> */}
          <div className="product__cards--container">
            {products && products.items.map(({
              image, id, name, price,
            }) => (
              <div className="">
                <ProductCard
                  image={image}
                  name={name}
                  key={id}
                  backgroundImage={image}
                  id={id}
                />
                <div>
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
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
