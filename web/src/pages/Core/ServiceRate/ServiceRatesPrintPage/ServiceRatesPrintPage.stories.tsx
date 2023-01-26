import type { ComponentMeta } from '@storybook/react'

import ServiceRatesPrintPage from './ServiceRatesPrintPage'

export const generated = () => {
  return <ServiceRatesPrintPage />
}

export default {
  title: 'Pages/ServiceRatesPrintPage',
  component: ServiceRatesPrintPage,
} as ComponentMeta<typeof ServiceRatesPrintPage>
