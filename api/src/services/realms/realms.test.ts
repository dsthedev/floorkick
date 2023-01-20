import type { Realm } from '@prisma/client'

import { realms, realm, createRealm, updateRealm, deleteRealm } from './realms'
import type { StandardScenario } from './realms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('realms', () => {
  scenario('returns all realms', async (scenario: StandardScenario) => {
    const result = await realms()

    expect(result.length).toEqual(Object.keys(scenario.realm).length)
  })

  scenario('returns a single realm', async (scenario: StandardScenario) => {
    const result = await realm({ id: scenario.realm.one.id })

    expect(result).toEqual(scenario.realm.one)
  })

  scenario('creates a realm', async () => {
    const result = await createRealm({
      input: { title: 'String', updatedAt: '2023-01-19T20:40:30.264Z' },
    })

    expect(result.title).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-01-19T20:40:30.264Z'))
  })

  scenario('updates a realm', async (scenario: StandardScenario) => {
    const original = (await realm({ id: scenario.realm.one.id })) as Realm
    const result = await updateRealm({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a realm', async (scenario: StandardScenario) => {
    const original = (await deleteRealm({ id: scenario.realm.one.id })) as Realm
    const result = await realm({ id: original.id })

    expect(result).toEqual(null)
  })
})
