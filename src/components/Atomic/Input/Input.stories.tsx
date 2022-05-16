import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BsFillRecordFill } from 'react-icons/bs'
import { Input } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div style={{margin: '10px auto' }}>
      <Input {...args} />
    </div>
  )
};

export const StyleInput = Template.bind({});
export const StyleInputWithIcon = Template.bind({});

StyleInput.args = {
  label: 'Nome',
  placeholder: 'Ex: Jonh Doe',
  type: 'text',
};

StyleInputWithIcon.args = {
  label: 'Nome',
  placeholder: 'Ex: Jonh Doe',
  type: 'text',
  icon: <BsFillRecordFill />
};
