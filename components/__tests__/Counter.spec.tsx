import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

describe('Counter', () => {
  test('renders Counter with no props', () => {
    render(<Counter />)
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument()
  })

  test('renders Counter with initial count', () => {
    render(<Counter initialCount={65} />)
    expect(screen.getByText(/count: 65/i)).toBeInTheDocument()
  })

  test('increment counter', () => {
    render(<Counter />)
    screen.debug()
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument()

    const addBtn = screen.getByText(/add/i)
    expect(addBtn).toBeInTheDocument()
    userEvent.click(addBtn)
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument()
  })
})
