import type { ComponentMeta } from '@storybook/react'

import PlankincrementorPage from './PlankincrementorPage'

export const generated = () => {
  return <PlankincrementorPage />
}

export default {
  title: 'Pages/PlankincrementorPage',
  component: PlankincrementorPage,
} as ComponentMeta<typeof PlankincrementorPage>
