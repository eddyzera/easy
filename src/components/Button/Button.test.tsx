import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BsFillRecordFill } from 'react-icons/bs'
import { Button } from '.'

describe('<Button />', () => {
  it('should render component with the primary prop without error', () => {
    const { container } = render(<Button label='Button' />)
    expect(container.querySelector('._primary')).toBeInTheDocument()
  })

  it('should render component with the secondary prop without error', () => {
    const { container } = render(<Button label='Button' variant='secondary' />)
    expect(container.querySelector('._secondary')).toBeInTheDocument()
  })

  it('should render component with the leftIcon prop without error', () => {
    const { container } = render(<Button label='Button' icon={<BsFillRecordFill />} />)
    expect(container.querySelector('._iconLeft')).toBeInTheDocument()
  })

  it('should render component with the rightIcon prop without error', () => {
    const { container } = render(<Button label='Button' icon={<BsFillRecordFill />} position='right' />)
    expect(container.querySelector('._iconRight')).toBeInTheDocument()
  })

  it('should render component only with icon prop without error', () => {
    const { container } = render(<Button label='' icon={<BsFillRecordFill />} />)
    expect(container.querySelector('._iconOnly')).toBeInTheDocument()
  })
})