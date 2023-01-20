import type { Prisma, Realm } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RealmCreateArgs>({
  realm: {
    one: { data: { title: 'String', updatedAt: '2023-01-19T20:40:30.314Z' } },
    two: { data: { title: 'String', updatedAt: '2023-01-19T20:40:30.314Z' } },
  },
})

export type StandardScenario = ScenarioData<Realm, 'realm'>
