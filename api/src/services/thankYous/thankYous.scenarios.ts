import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:56:28.329Z',
            updatedAt: '2024-01-06T13:56:28.329Z',
          },
        },
        user: {
          create: {
            email: 'String5052498',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:56:28.329Z',
          },
        },
        toUser: {
          create: {
            email: 'String2827571',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:56:28.329Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:56:28.330Z',
            updatedAt: '2024-01-06T13:56:28.330Z',
          },
        },
        user: {
          create: {
            email: 'String7046212',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:56:28.330Z',
          },
        },
        toUser: {
          create: {
            email: 'String2334221',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:56:28.330Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
