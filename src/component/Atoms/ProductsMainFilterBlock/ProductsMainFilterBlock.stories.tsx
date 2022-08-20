import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import ProductsMainFilterBlock from './ProductsMainFilterBlock';

export default {
  title: 'Components/Atoms/ProductsMainFilterBlock',
  component: ProductsMainFilterBlock,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {' '}
        <div style={{ margin: '1em' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ProductsMainFilterBlock>;

export const Template: ComponentStory<typeof ProductsMainFilterBlock> = (args) => <ProductsMainFilterBlock {...args} />;
