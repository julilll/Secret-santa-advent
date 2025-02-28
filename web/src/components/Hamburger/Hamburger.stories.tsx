import type { Meta, StoryObj } from '@storybook/react'

import Hamburger from './Hamburger'

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
}

export default meta

type Story = StoryObj<typeof Hamburger>

export const HamburgerShowing: Story = {
  args: {
    isHamburger: true,
    toggleNav: () => {},
  },
}

export const CloseShowing: Story = {
  args: {
    isHamburger: false,
    toggleNav: () => {},
  },
}
