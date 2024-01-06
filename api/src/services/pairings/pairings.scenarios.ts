import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2024-01-06T13:55:18.492Z',
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:55:18.492Z',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
        santa: {
          create: {
            email: 'String1969959',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
        person: {
          create: {
            email: 'String9772143',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-01-06T13:55:18.492Z',
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:55:18.492Z',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
        santa: {
          create: {
            email: 'String5688750',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
        person: {
          create: {
            email: 'String3576870',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:55:18.492Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
