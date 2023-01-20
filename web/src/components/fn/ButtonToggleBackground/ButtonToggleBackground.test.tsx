import { render } from '@redwoodjs/testing/web'

import ButtonToggleBackground from './ButtonToggleBackground'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonToggleBackground', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonToggleBackground />)
    }).not.toThrow()
  })
})
