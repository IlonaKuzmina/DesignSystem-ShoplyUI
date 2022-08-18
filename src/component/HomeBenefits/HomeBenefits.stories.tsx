import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeBenefits from './HomeBenefits';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import HomeTitle from '../HomeTitle/HomeTitle';

export default {
  title: 'Example/Molecules/HomeBenefits',
  component: HomeBenefits,
  subcomponents: { BenefitsCard, HomeTitle },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeBenefits>;

const OneItem: ComponentStory<typeof BenefitsCard> = (args:any) => (
  <HomeBenefits {...args}>
    <BenefitsCard {...args} />
  </HomeBenefits>
);

export const Primary = OneItem.bind({});
Primary.args = {
  image: 'src/assets/icons/quality.svg',
  title: 'Best Qualityfhnfghf',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};
