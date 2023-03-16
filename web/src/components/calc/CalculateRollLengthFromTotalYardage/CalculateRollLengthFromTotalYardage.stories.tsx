// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CalculateRollLengthFromTotalYardage> = (args) => {
//   return <CalculateRollLengthFromTotalYardage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CalculateRollLengthFromTotalYardage from './CalculateRollLengthFromTotalYardage'

export const generated = () => {
  return <CalculateRollLengthFromTotalYardage />
}

export default {
  title: 'Components/CalculateRollLengthFromTotalYardage',
  component: CalculateRollLengthFromTotalYardage,
} as ComponentMeta<typeof CalculateRollLengthFromTotalYardage>
