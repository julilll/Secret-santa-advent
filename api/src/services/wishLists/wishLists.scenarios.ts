import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-01-06T13:55:46.323Z',
        user: {
          create: {
            email: 'String6021452',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:46.323Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:55:46.323Z',
            updatedAt: '2024-01-06T13:55:46.323Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-01-06T13:55:46.323Z',
        user: {
          create: {
            email: 'String5877697',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:46.323Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:55:46.323Z',
            updatedAt: '2024-01-06T13:55:46.323Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
