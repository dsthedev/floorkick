import { render } from '@redwoodjs/testing/web'

import CalcFooter from './CalcFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CalcFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalcFooter />)
    }).not.toThrow()
  })
})
