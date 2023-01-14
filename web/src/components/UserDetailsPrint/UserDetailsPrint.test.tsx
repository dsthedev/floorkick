import { render } from '@redwoodjs/testing/web'

import UserDetailsPrint from './UserDetailsPrint'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserDetailsPrint', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserDetailsPrint />)
    }).not.toThrow()
  })
})
