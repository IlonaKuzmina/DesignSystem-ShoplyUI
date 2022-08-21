import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductsPage from './ProductsPage';

import store from '../../../reducer/store';

export default {
  title: 'Components/Pages/ProductsPage',
  component: ProductsPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>
          <div style={{
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
          }}
          >
            {Story()}
          </div>

        </MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ProductsPage>;

export const ProductsPageContent = () => <ProductsPage />;
