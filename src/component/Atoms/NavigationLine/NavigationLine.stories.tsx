import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import NavigationLine from './NavigationLine';

export default {
  title: 'Components/Atoms/NavigationLine',
  component: NavigationLine,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/products']}>{Story()}</MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof NavigationLine>;

const Template: ComponentStory<typeof NavigationLine> = (args) => <NavigationLine {...args} />;

export const FirstLevel = Template.bind({});
FirstLevel.args = {
  link: 'About',
};
