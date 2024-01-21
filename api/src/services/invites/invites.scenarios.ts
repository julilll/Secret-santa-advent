import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-12T20:27:20.191Z',
            updatedAt: '2024-01-12T20:27:20.191Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-12T20:27:20.191Z',
            updatedAt: '2024-01-12T20:27:20.191Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
