// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserDetailsPrint> = (args) => {
//   return <UserDetailsPrint {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UserDetailsPrint from './UserDetailsPrint'

export const generated = () => {
  return <UserDetailsPrint />
}

export default {
  title: 'Components/UserDetailsPrint',
  component: UserDetailsPrint,
} as ComponentMeta<typeof UserDetailsPrint>
