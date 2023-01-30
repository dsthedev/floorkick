import type { Prisma, JobSheet } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobSheetCreateArgs>({
  jobSheet: {
    one: { data: { updatedAt: '2023-01-30T04:34:44.468Z' } },
    two: { data: { updatedAt: '2023-01-30T04:34:44.468Z' } },
  },
})

export type StandardScenario = ScenarioData<JobSheet, 'jobSheet'>
