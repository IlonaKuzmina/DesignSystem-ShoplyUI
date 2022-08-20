import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';
import store from '../../../reducer/store';

export default {
  title: 'Components/Molecules/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}><div style={{ width: '100%' }}>{Story()}</div></MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Navigation>;

export const Template = () => <Navigation />;
