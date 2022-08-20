import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeTitle from './HomeTitle';

export default {
  title: 'Components/Atoms/HomeTitle',
  component: HomeTitle,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeTitle>;

const Template: ComponentStory<typeof HomeTitle> = (args) => <HomeTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Benefits Using Our Services',
};
