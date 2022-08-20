import React from 'react';
import { ComponentMeta } from '@storybook/react';

import HomePartners from './HomePartners';

export default {
  title: 'Components/Atoms/HomePartners',
  component: HomePartners,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomePartners>;

export const Primary = () => <HomePartners />;
