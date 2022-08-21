import React from 'react';
import { ComponentMeta } from '@storybook/react';

import CartSubtotal from './CartSubtotal';

export default {
  title: 'Components/Atoms/CartSubtotal',
  component: CartSubtotal,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CartSubtotal>;

export const Template = () => <CartSubtotal cartTotalSum={113} shipingFee={5} />;
