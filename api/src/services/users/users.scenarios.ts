import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7206184',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-01-06T13:52:28.816Z',
      },
    },
    two: {
      data: {
        email: 'String791276',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-01-06T13:52:28.816Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
