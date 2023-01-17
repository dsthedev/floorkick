import { render } from '@redwoodjs/testing/web'

import CalculateRollLengthFromTotalYardage from './CalculateRollLengthFromTotalYardage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CalculateRollLengthFromTotalYardage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalculateRollLengthFromTotalYardage />)
    }).not.toThrow()
  })
})
