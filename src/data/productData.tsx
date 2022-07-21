export type ProductData = {
  id?: number,
  name?: string,
  specification?: string,
  price?: number,
  image?: string,
  category?: string,
  subcategory?: string,
  inStock?: number,
  inCart: boolean,
}

const productsData: ProductData[] = [
  {
    id: 1,
    name: 'Razer Mouse X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: './assets/images/product_1.png',
    category: 'electronic',
    subcategory: 'headphones',
    inStock: 75,
    inCart: false,
  },
  {
    id: 2,
    name: 'Logitech G102',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: './assets/images/product_2.png',
    category: 'electronic',
    subcategory: 'mouse',
    inStock: 23,
    inCart: false,
  },
  {
    id: 3,
    name: 'Mouse T78 Black',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 55,
    image: './assets/images/product_3.png',
    category: 'electronic',
    subcategory: 'headphones',
    inStock: 92,
    inCart: false,
  },
  {
    id: 4,
    name: 'Razer Mouse X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 34,
    image: './assets/images/product_4.png',
    category: 'electronic',
    subcategory: 'headphones',
    inStock: 2,
    inCart: false,
  },
  {
    id: 5,
    name: 'Logitech G102',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 40,
    image: './assets/images/product_5.png',
    category: 'electronic',
    subcategory: 'mouse',
    inStock: 4,
    inCart: false,
  },
  {
    id: 6,
    name: 'Mouse T78 Black',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 35,
    image: './assets/images/product_6.png',
    category: 'electronic',
    subcategory: 'keyboard',
    inStock: 50,
    inCart: false,
  },
  {
    id: 7,
    name: 'Razer Mouse X89',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 80,
    image: './assets/images/product_7.png',
    category: 'electronic',
    subcategory: 'keyboard',
    inStock: 3,
    inCart: false,
  },
  {
    id: 8,
    name: 'Black diamond',
    specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat',
    price: 1500,
    image: './assets/images/product_14-diamond.png',
    category: 'jawelery',
    subcategory: 'diamond',
    inStock: 1,
    inCart: false,
  },
];

export const getAllProducts = () => [...productsData];
// eslint-disable-next-line max-len
export const getProduct = (id: number) => productsData.find((product) => product.id === id);

export default productsData;