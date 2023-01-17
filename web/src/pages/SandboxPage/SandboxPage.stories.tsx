import type { ComponentMeta } from '@storybook/react'

import SandboxPage from './SandboxPage'

export const generated = () => {
  return <SandboxPage />
}

export default {
  title: 'Pages/SandboxPage',
  component: SandboxPage,
} as ComponentMeta<typeof SandboxPage>
