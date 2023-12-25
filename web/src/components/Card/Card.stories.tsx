import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    avatar: {
      avatar: '/images/placeholder__avatar-01.png',
    },
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
  },
}
