import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeCostumers from './HomeCostumers';
import HomeTittle from '../HomeTitle/HomeTitle';

export default {
  title: 'Components/Atoms/HomeCostumers',
  component: HomeCostumers,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeCostumers>;

export const CostumersCard = () => <HomeCostumers />;
