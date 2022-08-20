import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import BurgerNav from './BurgerNav';

export default {
  title: 'Components/Molecules/BurgerNav',
  component: BurgerNav,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>{Story()}</MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof BurgerNav>;

export const Primary = () => <BurgerNav />;
