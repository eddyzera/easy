import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hello } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Hello,
} as ComponentMeta<typeof Hello>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
};
