// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DisplayCurrency> = (args) => {
//   return <DisplayCurrency {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DisplayCurrency from './DisplayCurrency'

export const generated = () => {
  return <DisplayCurrency />
}

export default {
  title: 'Components/DisplayCurrency',
  component: DisplayCurrency,
} as ComponentMeta<typeof DisplayCurrency>
