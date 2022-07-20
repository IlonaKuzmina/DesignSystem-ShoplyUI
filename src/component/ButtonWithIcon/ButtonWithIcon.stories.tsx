import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonWithIcon from './ButtonWithIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/ButtonWithIcon',
  component: ButtonWithIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonWithIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonWithIcon> = (args) => <ButtonWithIcon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'shop now',
  icon: 'src/assets/icons/cart.svg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'shop now',
  icon: 'src/assets/icons/cart.svg',
};

export const Gray = Template.bind({});
Gray.args = {
  type: 'gray',
  label: 'shop now',
  icon: 'src/assets/icons/cart.svg',
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'icon',
  label: 'shop now',
  icon: 'src/assets/icons/cart.svg',
};

export const IconNoLable = Template.bind({});
IconNoLable.args = {
  type: 'icon',
  icon: 'src/assets/icons/cart.svg',
};
