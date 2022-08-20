import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import HomeHeader from './HomeHeader';

export default {
  title: 'Components/Atoms/HomeHeader',
  component: HomeHeader,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/products']}>
        <div>{Story()}</div>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof HomeHeader>;

export const Primary = () => <HomeHeader />;
