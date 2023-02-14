import type { ComponentMeta, ComponentStory } from '@storybook/react'

import SimpleLayout from './SimpleLayout'

export const generated: ComponentStory<typeof SimpleLayout> = (args) => {
  return <SimpleLayout {...args} />
}

export default {
  title: 'Layouts/SimpleLayout',
  component: SimpleLayout,
} as ComponentMeta<typeof SimpleLayout>
