import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-01-06T13:55:03.251Z',
        updatedAt: '2024-01-06T13:55:03.251Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-01-06T13:55:03.251Z',
        updatedAt: '2024-01-06T13:55:03.251Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
