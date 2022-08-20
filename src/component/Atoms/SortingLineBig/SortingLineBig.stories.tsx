import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortingLineBig from './SortingLineBig';

export default {
  title: 'Components/Atoms/SortingLineBig',
  component: SortingLineBig,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SortingLineBig>;

const Template: ComponentStory<typeof SortingLineBig> = (args) => <SortingLineBig {...args} />;

export const SortingLineComputers = Template.bind({});
SortingLineComputers.args = {
  searchState: '"ring"',
};
