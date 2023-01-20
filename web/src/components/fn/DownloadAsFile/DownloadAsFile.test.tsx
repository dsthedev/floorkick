import { render } from '@redwoodjs/testing/web'

import DownloadAsFile from './DownloadAsFile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DownloadAsFile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DownloadAsFile />)
    }).not.toThrow()
  })
})
