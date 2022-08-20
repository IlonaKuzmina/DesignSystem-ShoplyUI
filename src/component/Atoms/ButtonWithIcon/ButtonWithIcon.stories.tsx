import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonWithIcon from './ButtonWithIcon';

export default {
  title: 'Components/Atoms/ButtonWithIcon',
  component: ButtonWithIcon,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ButtonWithIcon>;

const Template: ComponentStory<typeof ButtonWithIcon> = (args) => <ButtonWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'shop now',
  icon: './assets/icons/arrow.svg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'shop now',
  icon: './assets/icons/arrow.svg',
};

export const Gray = Template.bind({});
Gray.args = {
  type: 'gray',
  label: 'shop now',
  icon: './assets/icons/arrow.svg',
};
