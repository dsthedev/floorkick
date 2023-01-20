import type { Prisma, Note } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NoteCreateArgs>({
  note: {
    one: { data: { title: 'String', updatedAt: '2023-01-19T20:40:15.531Z' } },
    two: { data: { title: 'String', updatedAt: '2023-01-19T20:40:15.531Z' } },
  },
})

export type StandardScenario = ScenarioData<Note, 'note'>
