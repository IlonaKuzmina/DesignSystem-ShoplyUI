export type ProductData = {
  id: number,
  name: string,
  specification?: string,
  price: number,
  image: string,
  category: string,
  subcategory: string,
  inStock: number,
  inCart: boolean,
  count: number,
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Razer Mouse X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: '/assets/images/product_1.png',
    category: 'Electronic',
    subcategory: 'headphones',
    inStock: 5,
    inCart: false,
    count: 0,
  },
  {
    id: 2,
    name: 'Logitech G102',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: '/assets/images/product_2.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 23,
    inCart: false,
    count: 0,
  },
  {
    id: 3,
    name: 'Mouse T78 Black',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: '/assets/images/product_3.png',
    category: 'Electronic',
    subcategory: 'headphones',
    inStock: 92,
    inCart: false,
    count: 0,
  },
  {
    id: 4,
    name: 'Razer Mouse X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 34,
    image: '/assets/images/product_4.png',
    category: 'Electronic',
    subcategory: 'headphones',
    inStock: 2,
    inCart: false,
    count: 0,
  },
  {
    id: 5,
    name: 'Logitech G102',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 40,
    image: '/assets/images/product_5.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 4,
    inCart: false,
    count: 0,
  },
  {
    id: 6,
    name: 'Key T78 Black',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 35,
    image: '/assets/images/product_6.png',
    category: 'Electronic',
    subcategory: 'keyboard',
    inStock: 50,
    inCart: false,
    count: 0,
  },
  {
    id: 7,
    name: 'Razer X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 80,
    image: '/assets/images/product_7.png',
    category: 'Electronic',
    subcategory: 'keyboard',
    inStock: 3,
    inCart: false,
    count: 0,
  },
  {
    id: 8,
    name: 'Black diamond',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 230,
    image: '/assets/images/product_8.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 9,
    name: 'Black diamond',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 300,
    image: '/assets/images/product_9.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 10,
    name: 'Slim fit suite',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 1500,
    image: '/assets/images/suite.png',
    category: 'Men’s Clothing',
    subcategory: 'suite',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 11,
    name: 'Elegant beauty',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 950,
    image: '/assets/images/dress2.png',
    category: 'Women’s Clothing',
    subcategory: 'dress',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 12,
    name: 'Twisted Halo Dia',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 1500,
    image: '/assets/images/ring2.png',
    category: 'Jewelery',
    subcategory: 'ring',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 13,
    name: 'Fairy dress',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 900,
    image: '/assets/images/dress.png',
    category: 'Women’s Clothing',
    subcategory: 'dress',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 14,
    name: 'Petite Halo Diam',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 1200,
    image: '/assets/images/ring.png',
    category: 'Jewelery',
    subcategory: 'ring',
    inStock: 1,
    inCart: false,
    count: 0,
  },
  {
    id: 15,
    name: 'Big Gaming Mouse',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 300,
    image: '/assets/images/product_10.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 2,
    inCart: false,
    count: 0,
  },
  {
    id: 16,
    name: 'Hell Pinch',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 300,
    image: '/assets/images/product_13.png',
    category: 'Electronic',
    subcategory: 'mouse',
    inStock: 3,
    inCart: false,
    count: 0,
  },
];

export const getAllProducts = () => [...products];

export default products;