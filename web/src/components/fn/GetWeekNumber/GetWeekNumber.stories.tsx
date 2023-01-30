// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GetWeekNumber> = (args) => {
//   return <GetWeekNumber {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GetWeekNumber from './GetWeekNumber'

export const generated = () => {
  return <GetWeekNumber />
}

export default {
  title: 'Components/GetWeekNumber',
  component: GetWeekNumber,
} as ComponentMeta<typeof GetWeekNumber>
