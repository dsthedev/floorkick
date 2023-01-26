import { render } from '@redwoodjs/testing/web'

import ServiceRatesPrintPage from './ServiceRatesPrintPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ServiceRatesPrintPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceRatesPrintPage />)
    }).not.toThrow()
  })
})
