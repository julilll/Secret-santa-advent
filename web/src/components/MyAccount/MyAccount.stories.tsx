import type { Meta, StoryObj } from '@storybook/react'

import MyAccount from './MyAccount'

const meta: Meta<typeof MyAccount> = {
  component: MyAccount,
}

export default meta

type Story = StoryObj<typeof MyAccount>

export const Primary: Story = {}
