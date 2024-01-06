import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String2156439',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:54:07.283Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:54:07.283Z',
            updatedAt: '2024-01-06T13:54:07.283Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String9246300',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-01-06T13:54:07.283Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-06T13:54:07.283Z',
            updatedAt: '2024-01-06T13:54:07.283Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
