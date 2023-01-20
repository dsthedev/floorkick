import { render } from '@redwoodjs/testing/web'

import LoginOrOutLink from './LoginOrOutLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginOrOutLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginOrOutLink />)
    }).not.toThrow()
  })
})
