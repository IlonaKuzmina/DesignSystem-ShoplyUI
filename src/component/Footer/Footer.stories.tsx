import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Example/Atoms/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Footer>;

export const Primary = () => <Footer />;
