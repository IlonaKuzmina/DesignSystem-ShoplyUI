import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductNotFound from './ProductNotFound';

export default {
  title: 'Components/Atoms/ProductNotFound',
  component: ProductNotFound,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductNotFound>;

export const Template: ComponentStory<typeof ProductNotFound> = () => <ProductNotFound />;
