import type { Prisma, Note } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NoteCreateArgs>({
  note: {
    one: {
      data: { body: 'String9080642', updatedAt: '2023-01-15T00:41:07.763Z' },
    },
    two: {
      data: { body: 'String9532491', updatedAt: '2023-01-15T00:41:07.763Z' },
    },
  },
})

export type StandardScenario = ScenarioData<Note, 'note'>
