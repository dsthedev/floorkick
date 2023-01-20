import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String6417173', updatedAt: '2023-01-19T20:39:57.785Z' },
    },
    two: {
      data: { email: 'String4228631', updatedAt: '2023-01-19T20:39:57.785Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
