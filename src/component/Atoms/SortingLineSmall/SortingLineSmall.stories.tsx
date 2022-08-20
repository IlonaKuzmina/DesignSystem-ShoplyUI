import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortingLineSmall from './SortingLineSmall';

export default {
  title: 'Components/Atoms/SortingLineSmall',
  component: SortingLineSmall,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '599px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SortingLineSmall>;

const Template: ComponentStory<typeof SortingLineSmall> = (args) => <SortingLineSmall {...args} />;

export const SortingLinePhone = Template.bind({});
SortingLinePhone.args = {};
