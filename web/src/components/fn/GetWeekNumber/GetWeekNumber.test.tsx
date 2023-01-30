import { render } from '@redwoodjs/testing/web'

import GetWeekNumber from './GetWeekNumber'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GetWeekNumber', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetWeekNumber />)
    }).not.toThrow()
  })
})
