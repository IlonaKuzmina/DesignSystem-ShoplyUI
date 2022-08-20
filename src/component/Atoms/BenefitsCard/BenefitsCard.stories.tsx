import { ComponentStory, ComponentMeta } from '@storybook/react';

import BenefitsCard from './BenefitsCard';

export default {
  title: 'Components/Atoms/BenefitsCard',
  component: BenefitsCard,
  decorators: [
    (Story) => (
      <div style={{
        padding: '20px 20px', display: 'flex', textAlign: 'center',
      }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BenefitsCard>;

const Template: ComponentStory<typeof BenefitsCard> = (args) => <BenefitsCard {...args} />;

export const Quality = Template.bind({});
Quality.args = {
  image: '/assets/icons/quality.svg',
  title: 'Best Quality',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};

export const Shipping = Template.bind({});
Shipping.args = {
  image: '/assets/icons/shipping.svg',
  title: 'Free Shipping',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};

export const Warranty = Template.bind({});
Warranty.args = {
  image: '/assets/icons/warranty.svg',
  title: 'Warranty',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id',
};
