import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NormalScreenAbout from './NormalScreenAbout';

export default {
  title: 'Example/Atoms/NormalScreenAbout',
  component: NormalScreenAbout,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NormalScreenAbout>;

export const Primary = () => <NormalScreenAbout />;
