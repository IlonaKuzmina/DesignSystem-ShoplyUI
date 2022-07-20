import { ComponentStory, ComponentMeta } from '@storybook/react';

import BenefitsCard from './BenefitsCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/BenefitsCard',
  component: BenefitsCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BenefitsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BenefitsCard> = (args) => <BenefitsCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  image: 'src/assets/icons/quality.svg',
  title: 'Best Quality',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};
