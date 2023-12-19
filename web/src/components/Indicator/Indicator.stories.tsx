import type { Meta, StoryObj } from '@storybook/react'

import Indicator from './Indicator'

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Indicator>

export const Success: Story = { args: { status: 'success' } }

export const Warning: Story = { args: { status: 'warning' } }

export const Error: Story = { args: { status: 'error' } }
