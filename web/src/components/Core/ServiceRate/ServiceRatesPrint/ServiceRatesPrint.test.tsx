import { render } from '@redwoodjs/testing/web'

import ServiceRatesPrint from './ServiceRatesPrint'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceRatesPrint', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceRatesPrint />)
    }).not.toThrow()
  })
})
