import { render } from '@redwoodjs/testing/web'

import PlankIncrementor from './PlankIncrementor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlankIncrementor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlankIncrementor />)
    }).not.toThrow()
  })
})
