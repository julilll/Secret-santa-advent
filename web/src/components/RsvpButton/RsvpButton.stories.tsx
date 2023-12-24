import type { Meta, StoryObj } from '@storybook/react'

import RsvpButton from './RsvpButton'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const Accept: Story = {
  args: {
    status: 'accept',
  },
}

export const Decline: Story = {
  args: {
    status: 'decline',
  },
}
