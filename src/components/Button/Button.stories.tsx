import React from 'react';
import { BsFillRecordFill } from 'react-icons/bs'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div style={{margin: '10px auto' }}>
      <Button {...args} />
    </div>
  )
};

export const StyleButton = Template.bind({});
export const StyleButtonIcon = Template.bind({})
export const StyleButtonOnlyIcon = Template.bind({})

StyleButton.args = {
  label: 'Button',
};

StyleButtonIcon.args = {
  label: 'Button Icon',
  icon: <BsFillRecordFill />
}

StyleButtonOnlyIcon.args = {
  label: '',
  icon: <BsFillRecordFill />
}