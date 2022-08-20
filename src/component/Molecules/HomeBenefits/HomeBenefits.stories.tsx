import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeBenefits from './HomeBenefits';
import BenefitsCard from '../../Atoms/BenefitsCard/BenefitsCard';
import HomeTitle from '../../Atoms/HomeTitle/HomeTitle';

export default {
  title: 'Components/Molecules/HomeBenefits',
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

export const Template = OneItem.bind({});
Template.args = {
  image: 'src/assets/icons/quality.svg',
  title: 'Best Quality',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};
