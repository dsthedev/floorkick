import type { ServiceRate } from '@prisma/client'

import {
  serviceRates,
  serviceRate,
  createServiceRate,
  updateServiceRate,
  deleteServiceRate,
} from './serviceRates'
import type { StandardScenario } from './serviceRates.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('serviceRates', () => {
  scenario('returns all serviceRates', async (scenario: StandardScenario) => {
    const result = await serviceRates()

    expect(result.length).toEqual(Object.keys(scenario.serviceRate).length)
  })

  scenario(
    'returns a single serviceRate',
    async (scenario: StandardScenario) => {
      const result = await serviceRate({ id: scenario.serviceRate.one.id })

      expect(result).toEqual(scenario.serviceRate.one)
    }
  )

  scenario('creates a serviceRate', async () => {
    const result = await createServiceRate({
      input: { updatedAt: '2023-01-19T20:40:44.595Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-19T20:40:44.595Z'))
  })

  scenario('updates a serviceRate', async (scenario: StandardScenario) => {
    const original = (await serviceRate({
      id: scenario.serviceRate.one.id,
    })) as ServiceRate
    const result = await updateServiceRate({
      id: original.id,
      input: { updatedAt: '2023-01-20T20:40:44.595Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-20T20:40:44.595Z'))
  })

  scenario('deletes a serviceRate', async (scenario: StandardScenario) => {
    const original = (await deleteServiceRate({
      id: scenario.serviceRate.one.id,
    })) as ServiceRate
    const result = await serviceRate({ id: original.id })

    expect(result).toEqual(null)
  })
})
