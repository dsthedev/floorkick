import type { ComponentMeta } from '@storybook/react'

import IsitadropPage from './IsitadropPage'

export const generated = () => {
  return <IsitadropPage />
}

export default {
  title: 'Pages/IsitadropPage',
  component: IsitadropPage,
} as ComponentMeta<typeof IsitadropPage>
