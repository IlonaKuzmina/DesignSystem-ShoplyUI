import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import AdminBurgerNav from './AdminBurgerNav';

export default {
  title: 'Components/Atoms/AdminBurgerNav',
  component: AdminBurgerNav,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}><div>{Story()}</div></MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof AdminBurgerNav>;

const Template: ComponentStory<typeof AdminBurgerNav> = (args) => <AdminBurgerNav {...args} />;

export const Primary = Template.bind({});
Primary.args = { logout: false };
