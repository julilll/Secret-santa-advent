import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: { avatar: '/images/placeholder__avatar-01.png' },
}

export const WithImageAndIcon: Story = {
  args: { avatar: '/images/placeholder__avatar-01.png', icon: 'eyeClosed' },
}

export const WithoutImageWithLetter: Story = {
  args: { letter: 'J' },
}

export const WithImageAndSantaHat: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    isSantaHatShowing: true,
  },
}

export const WithImageAndIndicator: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    indicator: 'warning',
  },
}

export const WithAllProps: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    letter: 'J',
    icon: 'eyeClosed',
    indicator: 'warning',
    isSantaHatShowing: true,
  },
}
