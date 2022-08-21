import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../reducer/store';
import { ProductData } from '../../../data/products';
import NavigationLine from '../../Atoms/NavigationLine/NavigationLine';
import './DetailPage.scss';
import ProductDetail from '../../Atoms/ProductDetail/ProductDetail';

const DetailPage = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductData>();
  const products = useSelector(({ product }: RootState) => product);
  const { id } = useParams();

  useEffect(() => {
    const activeProduct = products.items.find((p) => p.id === Number(id));
    setCurrentProduct(activeProduct);
  }, [products]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <NavigationLine link="Product" />
      <ProductDetail currentProduct={currentProduct} id={id} />
    </>
  );
};

export default DetailPage;
