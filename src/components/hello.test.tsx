import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Hello } from '.'

describe('Hello', () => {
  it('should do a test', () => {
    const { container } = render(<Hello />)
    expect(container.querySelector('.hello')).toBeInTheDocument()
  })
})