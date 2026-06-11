import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

// Mock useIsMobile to avoid issues with window.matchMedia
jest.mock('@/hooks/use-mobile', () => ({
  useIsMobile: () => false
}))

describe('Sidebar Cookie Security', () => {
  let cookieSpy: jest.SpyInstance

  beforeEach(() => {
    // Mock document.cookie
    cookieSpy = jest.spyOn(document, 'cookie', 'set')
    // Clear cookie mock before each test
    cookieSpy.mockClear()
  })

  afterEach(() => {
    cookieSpy.mockRestore()
  })

  it('sets sidebar cookie with Secure and SameSite=Strict attributes when toggled', () => {
    render(
      <SidebarProvider defaultOpen={true}>
        <SidebarTrigger />
      </SidebarProvider>
    )

    const trigger = screen.getByRole('button', { name: /toggle sidebar/i })

    act(() => {
      fireEvent.click(trigger)
    })

    // The cookie should be set when the sidebar is toggled
    expect(cookieSpy).toHaveBeenCalled()

    const cookieValue = cookieSpy.mock.calls[0][0]
    expect(cookieValue).toContain('sidebar:state=false')
    expect(cookieValue).toContain('Secure')
    expect(cookieValue).toContain('SameSite=Strict')
    expect(cookieValue).toContain('path=/')
    expect(cookieValue).toContain('max-age=')
  })
})
