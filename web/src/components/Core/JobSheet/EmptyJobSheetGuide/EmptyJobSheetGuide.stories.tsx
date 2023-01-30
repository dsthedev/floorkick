// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EmptyJobSheetGuide> = (args) => {
//   return <EmptyJobSheetGuide {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EmptyJobSheetGuide from './EmptyJobSheetGuide'

export const generated = () => {
  return <EmptyJobSheetGuide />
}

export default {
  title: 'Components/EmptyJobSheetGuide',
  component: EmptyJobSheetGuide,
} as ComponentMeta<typeof EmptyJobSheetGuide>
