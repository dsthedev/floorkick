// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlankIncrementor> = (args) => {
//   return <PlankIncrementor {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlankIncrementor from './PlankIncrementor'

export const generated = () => {
  return <PlankIncrementor />
}

export default {
  title: 'Components/PlankIncrementor',
  component: PlankIncrementor,
} as ComponentMeta<typeof PlankIncrementor>
