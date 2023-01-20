import type { Prisma, ServiceRate } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ServiceRateCreateArgs>({
  serviceRate: {
    one: { data: { updatedAt: '2023-01-19T20:40:44.710Z' } },
    two: { data: { updatedAt: '2023-01-19T20:40:44.710Z' } },
  },
})

export type StandardScenario = ScenarioData<ServiceRate, 'serviceRate'>
