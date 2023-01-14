// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ButtonToggleBackground> = (args) => {
//   return <ButtonToggleBackground {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ButtonToggleBackground from './ButtonToggleBackground'

export const generated = () => {
  return <ButtonToggleBackground />
}

export default {
  title: 'Components/ButtonToggleBackground',
  component: ButtonToggleBackground,
} as ComponentMeta<typeof ButtonToggleBackground>
