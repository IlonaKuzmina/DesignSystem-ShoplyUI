import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import LoginPage from './LoginPage';

export default {
  title: 'Components/Pages/LoginPage',
  component: LoginPage,
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
} as ComponentMeta<typeof LoginPage>;

export const LoginPageContent = () => <LoginPage />;
