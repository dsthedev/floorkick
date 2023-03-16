import { render } from '@redwoodjs/testing/web'

import IsitadropPage from './IsitadropPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IsitadropPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IsitadropPage />)
    }).not.toThrow()
  })
})
