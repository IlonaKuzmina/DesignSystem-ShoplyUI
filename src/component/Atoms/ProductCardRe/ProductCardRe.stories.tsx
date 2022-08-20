import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import ProductCardRe from './ProductCardRe';

export default {
  title: 'Components/Atoms/ProductCardRe',
  component: ProductCardRe,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {' '}
        <div style={{ margin: '1em', width: '269px', height: '418px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ProductCardRe>;

const Template: ComponentStory<typeof ProductCardRe> = (args) => <ProductCardRe {...args} />;

export const CardOne = Template.bind({});
CardOne.args = {
  image: '/assets/images/product_12.png',
};

export const CardTwo = Template.bind({});
CardTwo.args = {
  image: '/assets/images/dress.png',
};
