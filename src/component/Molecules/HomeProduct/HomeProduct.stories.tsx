import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../reducer/store';

import HomeProduct from './HomeProduct';

export default {
  title: 'Components/Molecules/HomeProduct',
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
