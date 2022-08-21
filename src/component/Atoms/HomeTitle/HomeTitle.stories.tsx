import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeTitle from './HomeTitle';

export default {
  title: 'Components/Atoms/HomeTitle',
  component: HomeTitle,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em', backgroundColor: 'white', borderRadius: '5PX' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeTitle>;

const Template: ComponentStory<typeof HomeTitle> = (args) => <HomeTitle {...args} />;

export const TitleTemplate = Template.bind({});
TitleTemplate.args = {
  title: 'Benefits Using Our Services',
};
