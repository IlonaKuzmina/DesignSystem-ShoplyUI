import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducer/store';

import AdminBurger from '../AdminHeader/AdminHeader';

export default {
  title: 'Example/Molecules/AdminBurger',
  component: AdminBurger,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}><div>{Story()}</div></MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof AdminBurger>;

const Template: ComponentStory<typeof AdminBurger> = (args) => <AdminBurger {...args} />;

export const Primary = Template.bind({});
Primary.args = { logout: true };
