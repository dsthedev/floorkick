import type { ComponentMeta } from '@storybook/react'

import ResourcesPage from './ResourcesPage'

export const generated = () => {
  return <ResourcesPage />
}

export default {
  title: 'Pages/ResourcesPage',
  component: ResourcesPage,
} as ComponentMeta<typeof ResourcesPage>
