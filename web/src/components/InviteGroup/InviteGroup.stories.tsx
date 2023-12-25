import type { Meta, StoryObj } from '@storybook/react'

import InviteGroup from './InviteGroup'

const meta: Meta<typeof InviteGroup> = {
  component: InviteGroup,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InviteGroup>

export const Empty: Story = {}

export const WithCards: Story = {
  args: {
    cards: [
      {
        avatar: { avatar: '/images/placeholder__avatar-01.png' },
        name: 'Jane Smith',
        email: 'jane@smith.com',
      },
      {
        avatar: { avatar: '/images/placeholder__avatar-03.png' },
        name: 'Michael Pollock',
        email: 'michael@pollok.com',
      },
      {
        avatar: { avatar: '/images/placeholder__avatar-05.png' },
        name: 'Sam Gordon',
        email: 'sam@gordon.com',
      },
    ],
  },
}
