import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

export default {
  title: 'Components/Pages/AboutPage',
  component: AboutPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>{Story()}</MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof AboutPage>;

// export const AboutContent = () => <AboutPage />;
