import { render } from '@redwoodjs/testing/web'

import CalculatorsPage from './CalculatorsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CalculatorsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalculatorsPage />)
    }).not.toThrow()
  })
})
