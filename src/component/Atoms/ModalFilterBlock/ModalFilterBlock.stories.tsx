import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../reducer/store';

import ModalFilterBlock from './ModalFilterBlock';

export default {
  title: 'Components/Atoms/ModalFilterBlock',
  component: ModalFilterBlock,
  decorators: [
    (Story) => (
      <Provider store={store}>
        {' '}
        <div style={{ margin: '1em', width: '600px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ModalFilterBlock>;

export const OnMobilePhone: ComponentStory<typeof ModalFilterBlock> = (args) => <ModalFilterBlock {...args} />;
