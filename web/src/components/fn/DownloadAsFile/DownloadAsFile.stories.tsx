// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DownloadAsFile> = (args) => {
//   return <DownloadAsFile {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DownloadAsFile from './DownloadAsFile'

export const generated = () => {
  return <DownloadAsFile />
}

export default {
  title: 'Components/DownloadAsFile',
  component: DownloadAsFile,
} as ComponentMeta<typeof DownloadAsFile>
