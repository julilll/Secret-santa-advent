import type { Meta, StoryObj } from '@storybook/react'

import HeaderWithRulers from './HeaderWithRulers'

const meta: Meta<typeof HeaderWithRulers> = {
  component: HeaderWithRulers,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderWithRulers>

export const Basic: Story = {
  args: {
    heading: 'Boiler-plate text',
  },
}

export const White: Story = {
  args: {
    heading: 'Boiler-plate text',
    className: 'text-white',
  },
}
