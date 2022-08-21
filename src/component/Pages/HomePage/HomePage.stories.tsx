import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import HomePage from './HomePage';

export default {
  title: 'Components/Pages/HomePage',
  component: HomePage,
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
} as ComponentMeta<typeof HomePage>;

export const HomePageContent = () => <HomePage />;
