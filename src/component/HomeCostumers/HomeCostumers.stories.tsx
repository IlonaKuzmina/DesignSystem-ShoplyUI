import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeCostumers from './HomeCostumers';

export default {
  title: 'Example/Atoms/HomeCostumers',
  component: HomeCostumers,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeCostumers>;

export const Primary = () => <HomeCostumers />;
