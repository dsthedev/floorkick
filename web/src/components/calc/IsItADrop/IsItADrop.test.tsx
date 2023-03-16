import { render } from '@redwoodjs/testing/web'

import IsItADrop from './IsItADrop'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IsItADrop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IsItADrop />)
    }).not.toThrow()
  })
})
