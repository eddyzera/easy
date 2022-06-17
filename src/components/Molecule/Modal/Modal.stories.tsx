import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../Atomic/Input'
import { Modal } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <div style={{margin: '10px auto' }}>
      <Modal {...args} />
    </div>
  )
};

export const StyleModal = Template.bind({});

StyleModal.args = {
  children: <Input label='name' placeholder='Ex: Jonh Doe' type='text' />
};
