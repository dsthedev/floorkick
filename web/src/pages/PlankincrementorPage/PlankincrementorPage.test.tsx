import { render } from '@redwoodjs/testing/web'

import PlankincrementorPage from './PlankincrementorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlankincrementorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlankincrementorPage />)
    }).not.toThrow()
  })
})
