// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LoginOrOutLink> = (args) => {
//   return <LoginOrOutLink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LoginOrOutLink from './LoginOrOutLink'

export const generated = () => {
  return <LoginOrOutLink />
}

export default {
  title: 'Components/LoginOrOutLink',
  component: LoginOrOutLink,
} as ComponentMeta<typeof LoginOrOutLink>
