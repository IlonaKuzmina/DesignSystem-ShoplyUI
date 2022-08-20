import '../src/index.css';
import '../src/styles/base.scss';
import '../src/styles/grids.scss';

export const parameters = {
  // layout: 'centered',
  backgrounds: {
    default: 'Default',
    values: [
      {
        name: 'Default',
        value: '#CBCBCB',
      },
      {
        name: 'White',
        value: '#FFFFFF',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|gray)$/i,
      date: /Date$/,
    },
  },
}