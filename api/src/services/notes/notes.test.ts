import type { Note } from '@prisma/client'

import { notes, note, createNote, updateNote, deleteNote } from './notes'
import type { StandardScenario } from './notes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('notes', () => {
  scenario('returns all notes', async (scenario: StandardScenario) => {
    const result = await notes()

    expect(result.length).toEqual(Object.keys(scenario.note).length)
  })

  scenario('returns a single note', async (scenario: StandardScenario) => {
    const result = await note({ id: scenario.note.one.id })

    expect(result).toEqual(scenario.note.one)
  })

  scenario('creates a note', async () => {
    const result = await createNote({
      input: { body: 'String2761344', updatedAt: '2023-01-15T00:41:07.742Z' },
    })

    expect(result.body).toEqual('String2761344')
    expect(result.updatedAt).toEqual(new Date('2023-01-15T00:41:07.742Z'))
  })

  scenario('updates a note', async (scenario: StandardScenario) => {
    const original = (await note({ id: scenario.note.one.id })) as Note
    const result = await updateNote({
      id: original.id,
      input: { body: 'String9712132' },
    })

    expect(result.body).toEqual('String9712132')
  })

  scenario('deletes a note', async (scenario: StandardScenario) => {
    const original = (await deleteNote({ id: scenario.note.one.id })) as Note
    const result = await note({ id: original.id })

    expect(result).toEqual(null)
  })
})
