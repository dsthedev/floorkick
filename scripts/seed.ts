import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

export default async () => {
  console.warn('\nWARNING: REMOVING ALL USERS & NOTES, THIS IS PERMANENT!')
  await db.user.deleteMany()
  await db.note.deleteMany()

  const importUsersFromSeed = () => {
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

  importUsersFromSeed()
}
