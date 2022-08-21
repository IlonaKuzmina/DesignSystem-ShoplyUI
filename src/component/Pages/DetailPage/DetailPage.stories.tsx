import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import DetailPage from './DetailPage';

export default {
  title: 'Components/Pages/DetailPage',
  component: DetailPage,
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
} as ComponentMeta<typeof DetailPage>;

// export const DetailPageContent = () => <DetailPage />;
