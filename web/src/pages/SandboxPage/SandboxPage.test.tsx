import { render } from '@redwoodjs/testing/web'

import SandboxPage from './SandboxPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SandboxPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SandboxPage />)
    }).not.toThrow()
  })
})
