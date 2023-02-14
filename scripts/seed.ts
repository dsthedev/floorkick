import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

export default async () => {
  console.warn('\nWARNING: ALL DATA BEING DELETED PERMANENTLY!')

  // await db.user.deleteMany()
  // await db.serviceRate.deleteMany()

  const importUsers = () => {
    try {
      const source = require('./seeds/users.json')
      const data: Prisma.UserCreateArgs['data'][] = []

      for (let i = 0; i < source.length; i++) {
        const newSalt = CryptoJS.lib.WordArray.random(128 / 8).toString()

        data.push({
          id: parseInt(source[i].id),
          handle: source[i].handle,
          hashedPassword: CryptoJS.PBKDF2(source[i].unHashedPassword, newSalt, {
            keySize: 256 / 32,
          }).toString(),
          salt: newSalt,
          roles: source[i].roles,
          email: source[i].email,
          firstName: source[i].firstName,
        })
      }

      Promise.all(
        data.map(async (data: Prisma.UserCreateArgs['data']) => {
          const record = await db.user.create({ data })
          console.log(
            'User [' + record.id + ' : ' + record.handle + '] imported'
          )
        })
      )
    } catch (error) {
      console.warn('User import failed:')
      console.error(error)
    }
  }

  const importRates = () => {
    console.info('\nAttempting to import default rates...')

    try {
      const source = require('./seeds/rates.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        data.push({
          // id: parseInt(source[i].id),
          value: parseInt(source[i].value), // cost
          unit: source[i].unit, // per unit
          task: source[i].task, // to perform task
          material: source[i].material, // for material
          modifiers: source[i].modifiers, // with modifier
          description: source[i].description, // extra description
          authorId: parseInt(source[i].authorId), // creator
        })
      }

      Promise.all(
        data.map(async (data) => {
          const record = await db.serviceRate.create({ data })
          console.log('ServiceRate [' + record.id + '] imported')
        })
      )
    } catch (error) {
      console.warn('Rate import failed:')
      console.error(error)
    }
  }

  // importUsers()
  // importRates()
}
