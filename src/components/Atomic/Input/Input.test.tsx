import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BsFillRecordFill } from 'react-icons/bs'
import { Input } from '.'

describe('Input', () => {
  it('should render component without error', () => {
    const { container } = render(<Input label='name' placeholder='ex: jonh doe' type='text' />)
    expect(container.querySelector('.inputContainer')).toBeInTheDocument()
  })

  it('should render component with icon without error', () => {
    const { container } = render(
      <Input 
        label='name'
        placeholder='ex: jonh doe'
        type='text'
        icon={<BsFillRecordFill />} 
        />
    )
    
    expect(container.querySelector('._hasIcon')).toBeInTheDocument()
  })
})