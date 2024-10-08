import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F0F0F0',
        },
        {
          name: 'dark',
          value: '#1A1A1E',
        },
      ],
    },
  },
};

export default preview;
