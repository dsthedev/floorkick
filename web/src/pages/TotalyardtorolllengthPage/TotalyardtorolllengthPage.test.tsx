import { render } from '@redwoodjs/testing/web'

import TotalyardtorolllengthPage from './TotalyardtorolllengthPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TotalyardtorolllengthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TotalyardtorolllengthPage />)
    }).not.toThrow()
  })
})
