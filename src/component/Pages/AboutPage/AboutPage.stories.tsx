import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

export default {
  title: 'Components/Pages/AboutPage',
  component: AboutPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <div style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
        }}
        >
          {Story()}
        </div>

      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof AboutPage>;

export const AboutPageContent = () => <AboutPage />;
