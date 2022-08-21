import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import Page404 from './Page404';

export default {
  title: 'Components/Pages/Page404',
  component: Page404,
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
} as ComponentMeta<typeof Page404>;

export const Page404Content = () => <Page404 />;
