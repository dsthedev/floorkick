import { render } from '@redwoodjs/testing/web'

import EmptyJobSheetGuide from './EmptyJobSheetGuide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmptyJobSheetGuide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmptyJobSheetGuide />)
    }).not.toThrow()
  })
})
