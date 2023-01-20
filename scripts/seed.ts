import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

export default async () => {
  console.warn('\nWARNING: REMOVING ALL USERS & NOTES, THIS IS PERMANENT!')

  await db.user.deleteMany()

  const importUsers = () => {
    console.info('\nAttempting user seed import...')

    try {
      const userSeedsSource = require('./seeds/users.json')
      const userSeedsData: Prisma.UserCreateArgs['data'][] = []

      for (let i = 0; i < userSeedsSource.length; i++) {
        const newSalt = CryptoJS.lib.WordArray.random(128 / 8).toString()

        userSeedsData.push({
          id: parseInt(userSeedsSource[i].id),
          email: userSeedsSource[i].email,
          hashedPassword: CryptoJS.PBKDF2(
            userSeedsSource[i].unHashedPassword,
            newSalt,
            {
              keySize: 256 / 32,
            }
          ).toString(),
          salt: newSalt,
          name: userSeedsSource[i].name,
          roles: userSeedsSource[i].roles,
        })
      }

      Promise.all(
        userSeedsData.map(async (data: Prisma.UserCreateArgs['data']) => {
          const record = await db.user.create({ data })
          console.log('User [' + record.name + '] imported')
        })
      )
    } catch (error) {
      console.warn('Please define your seed data.')
      console.error(error)
    }
  }

  const importRates = () => {
    console.info('\nAttempting to import default rates...')

    try {
      const src = require('./seeds/rates.json')
      const data = []

      for (let i = 0; i < src.length; i++) {
        data.push({
          value: parseInt(src[i].value),
          currency: src[i].currency,
          type: src[i].type,
          material: src[i].material,
          modifiers: src[i].modifiers,
          unit: src[i].unit,
          description: src[i].description,
          ownerId: parseInt(src[i].userId),
        })
      }

      Promise.all(
        data.map(async (data: Prisma.ServiceRateCreateArgs['data']) => {
          const record = await db.serviceRate.create({ data })
          console.log('ServiceRate [' + record.id + '] imported')
        })
      )
    } catch (error) {
      console.warn('Please define your rate data.')
      console.error(error)
    }
  }

  const importNotes = () => {
    console.info('\nAttempting to import default rates...')

    try {
      const src = require('./seeds/rates.json')
      const data = []

      for (let i = 0; i < src.length; i++) {
        data.push({
          value: parseInt(src[i].value),
          currency: src[i].currency,
          type: src[i].type,
          material: src[i].material,
          modifiers: src[i].modifiers,
          unit: src[i].unit,
          description: src[i].description,
          ownerId: parseInt(src[i].userId),
        })
      }

      Promise.all(
        data.map(async (data: Prisma.ServiceRateCreateArgs['data']) => {
          const record = await db.serviceRate.create({ data })
          console.log('ServiceRate [' + record.id + '] imported')
        })
      )
    } catch (error) {
      console.warn('Please define your rate data.')
      console.error(error)
    }
  }

  importUsers()
  importRates()
}
