import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String711954', updatedAt: '2023-01-15T01:03:02.859Z' },
    },
    two: {
      data: { email: 'String7268996', updatedAt: '2023-01-15T01:03:02.859Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
