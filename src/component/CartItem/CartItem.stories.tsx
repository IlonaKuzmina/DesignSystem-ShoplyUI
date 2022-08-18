import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducer/store';

import CartItem from './CartItem';

export default {
  title: 'Example/Atoms/CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>{Story()}</MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const InCart = Template.bind({});
InCart.args = {
  name: 'Razer Mouse X89',
  image: '/assets/images/product_10.png',
  price: 55,
  count: 2,
  inStock: 1,
};
