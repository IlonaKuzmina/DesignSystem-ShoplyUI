import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import HomeProduct from './HomeProduct';
import store from '../../reducer/store';

export default {
  title: 'Example/Atoms/HomeProduct',
  component: HomeProduct,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}>{Story()}</MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof HomeProduct>;

export const Primary = () => <HomeProduct />;
