import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScrollUpButton from './ScrollUpButton';

export default {
  title: 'Example/Atoms/ScrollUpButton',
  component: ScrollUpButton,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ScrollUpButton>;

export const Primary: ComponentStory<typeof ScrollUpButton> = () => (
  <ScrollUpButton />
);
