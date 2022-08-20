import React from 'react';
import { ComponentMeta } from '@storybook/react';

import SmallScreenAbout from './SmallScreenAbout';

export default {
  title: 'Components/Atoms/SmallScreenAbout',
  component: SmallScreenAbout,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '359px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SmallScreenAbout>;

export const Primary = () => <SmallScreenAbout />;
