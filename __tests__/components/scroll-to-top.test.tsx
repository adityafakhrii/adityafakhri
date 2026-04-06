import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { ScrollToTop } from '@/components/scroll-to-top'

describe('ScrollToTop Component', () => {
  beforeAll(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn()
  })

  it('initially does not show the button', () => {
    render(<ScrollToTop />)
    const button = screen.getByRole('button', { name: /scroll to top/i })
    expect(button).toHaveClass('opacity-0')
    expect(button).toHaveClass('pointer-events-none')
  })

  it('shows the button when scrolled down', () => {
    render(<ScrollToTop />)
    const button = screen.getByRole('button', { name: /scroll to top/i })
    
    act(() => {
      // Simulate scrolling past 400px
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })

    expect(button).toHaveClass('opacity-100')
    expect(button).not.toHaveClass('pointer-events-none')
  })

  it('calls window.scrollTo when clicked', () => {
    render(<ScrollToTop />)
    const button = screen.getByRole('button', { name: /scroll to top/i })
    
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })
    
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
