import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import ProductCard from './ProductCard';

export default {
  title: 'Components/Atoms/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {' '}
        <div style={{
          margin: '1em', width: '269px', height: '518px', backgroundColor: 'white', padding: '5px',
        }}
        >
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const CardOne = Template.bind({});
CardOne.args = {
  image: '/assets/images/product_8.png',
  price: 10,
  name: 'Razer Mouse X89',
};

export const CardTwo = Template.bind({});
CardTwo.args = {
  image: '/assets/images/product_3.png',
  name: 'Mouse T78 Black',
  price: 1500,
};
