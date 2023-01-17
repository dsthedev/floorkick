import type { ComponentMeta } from '@storybook/react'

import PrivacyPage from './PrivacyPage'

export const generated = () => {
  return <PrivacyPage />
}

export default {
  title: 'Pages/PrivacyPage',
  component: PrivacyPage,
} as ComponentMeta<typeof PrivacyPage>
