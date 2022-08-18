import React from 'react';
import { ComponentMeta } from '@storybook/react';

import SmallScreenAbout from './SmallScreenAbout';

export default {
  title: 'Example/Atoms/SmallScreenAbout',
  component: SmallScreenAbout,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SmallScreenAbout>;

export const Primary = () => <SmallScreenAbout />;
