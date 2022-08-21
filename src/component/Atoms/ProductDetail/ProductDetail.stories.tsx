import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import ProductDetail from './ProductDetail';

export default {
  title: 'Components/Atoms/ProductDetail',
  component: ProductDetail,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {' '}
        <div style={{
          margin: '1em', backgroundColor: 'white', borderRadius: '5px', padding: '10px',
        }}
        >
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ProductDetail>;

const Template: ComponentStory<typeof ProductDetail> = (args) => <ProductDetail {...args} />;

export const Product = Template.bind({});
Product.args = {
  currentProduct: {
    id: 1,
    price: 1500,
    image: '/assets/images/dress.png',
    name: 'Elegant beauty',
    category: 'Women’s Clothing',
    subcategory: 'dress',
    inStock: 2,
    inCart: true,
    count: 0,
  },
};
