import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args: {
    id: 'calendar',
  },
}

export const Check: Story = {
  args: {
    id: 'check',
  },
}

export const Chevron: Story = {
  args: {
    id: 'chevron',
  },
}

export const Close: Story = {
  args: {
    id: 'close',
  },
}

export const EyeClosed: Story = {
  args: {
    id: 'eyeClosed',
  },
}

export const EyeOpened: Story = {
  args: {
    id: 'eyeOpened',
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
  },
}

export const Minus: Story = {
  args: {
    id: 'minus',
  },
}

export const Plus: Story = {
  args: {
    id: 'plus',
  },
}

export const Question: Story = {
  args: {
    id: 'question',
  },
}

export const ThumbsDown: Story = {
  args: {
    id: 'thumbsDown',
  },
}

export const ThumbsUp: Story = {
  args: {
    id: 'thumbsUp',
  },
}

export const Upload: Story = {
  args: {
    id: 'upload',
  },
}

export const User: Story = {
  args: {
    id: 'user',
  },
}

export const UserCustomColor: Story = {
  args: {
    id: 'user',
    color: '#FF5733',
  },
}
