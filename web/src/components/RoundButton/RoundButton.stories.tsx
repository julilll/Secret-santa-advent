import type { Meta, StoryObj } from '@storybook/react'

import RoundButton from './RoundButton'

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RoundButton>

export const Success: Story = {
  args: {
    status: 'success',
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
  },
}

export const Error: Story = {
  args: {
    status: 'error',
  },
}
