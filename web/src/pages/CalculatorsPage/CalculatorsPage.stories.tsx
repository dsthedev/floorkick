import type { ComponentMeta } from '@storybook/react'

import CalculatorsPage from './CalculatorsPage'

export const generated = () => {
  return <CalculatorsPage />
}

export default {
  title: 'Pages/CalculatorsPage',
  component: CalculatorsPage,
} as ComponentMeta<typeof CalculatorsPage>
