import type { JobSheet } from '@prisma/client'

import {
  jobSheets,
  jobSheet,
  createJobSheet,
  updateJobSheet,
  deleteJobSheet,
} from './jobSheets'
import type { StandardScenario } from './jobSheets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobSheets', () => {
  scenario('returns all jobSheets', async (scenario: StandardScenario) => {
    const result = await jobSheets()

    expect(result.length).toEqual(Object.keys(scenario.jobSheet).length)
  })

  scenario('returns a single jobSheet', async (scenario: StandardScenario) => {
    const result = await jobSheet({ id: scenario.jobSheet.one.id })

    expect(result).toEqual(scenario.jobSheet.one)
  })

  scenario('creates a jobSheet', async () => {
    const result = await createJobSheet({
      input: { updatedAt: '2023-01-30T04:34:44.448Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-30T04:34:44.448Z'))
  })

  scenario('updates a jobSheet', async (scenario: StandardScenario) => {
    const original = (await jobSheet({
      id: scenario.jobSheet.one.id,
    })) as JobSheet
    const result = await updateJobSheet({
      id: original.id,
      input: { updatedAt: '2023-01-31T04:34:44.448Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-31T04:34:44.448Z'))
  })

  scenario('deletes a jobSheet', async (scenario: StandardScenario) => {
    const original = (await deleteJobSheet({
      id: scenario.jobSheet.one.id,
    })) as JobSheet
    const result = await jobSheet({ id: original.id })

    expect(result).toEqual(null)
  })
})
