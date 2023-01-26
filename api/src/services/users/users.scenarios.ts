import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { handle: 'String2148165', updatedAt: '2023-01-26T03:01:29.956Z' },
    },
    two: {
      data: { handle: 'String8179366', updatedAt: '2023-01-26T03:01:29.956Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
