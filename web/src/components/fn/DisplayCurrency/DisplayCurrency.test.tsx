import { render } from '@redwoodjs/testing/web'

import DisplayCurrency from './DisplayCurrency'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisplayCurrency', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayCurrency />)
    }).not.toThrow()
  })
})
