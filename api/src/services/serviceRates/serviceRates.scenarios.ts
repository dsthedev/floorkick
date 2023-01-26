import type { Prisma, ServiceRate } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ServiceRateCreateArgs>({
  serviceRate: {
    one: { data: { updatedAt: '2023-01-26T03:01:55.280Z' } },
    two: { data: { updatedAt: '2023-01-26T03:01:55.280Z' } },
  },
})

export type StandardScenario = ScenarioData<ServiceRate, 'serviceRate'>
