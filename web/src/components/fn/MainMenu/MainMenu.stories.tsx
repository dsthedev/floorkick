// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainMenu> = (args) => {
//   return <MainMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MainMenu from './MainMenu'

export const generated = () => {
  return <MainMenu />
}

export default {
  title: 'Components/MainMenu',
  component: MainMenu,
} as ComponentMeta<typeof MainMenu>
