import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScrollUpButton from './ScrollUpButton';

export default {
  title: 'Components/Atoms/ScrollUpButton',
  component: ScrollUpButton,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ScrollUpButton>;

export const Template: ComponentStory<typeof ScrollUpButton> = () => (
  <ScrollUpButton />
);
