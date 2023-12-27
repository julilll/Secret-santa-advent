import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Success: Story = {
  render: () => (
    <Modal status="success">
      <p>Something interesting</p>
    </Modal>
  ),
}

export const Warning: Story = {
  render: () => (
    <Modal status="warning">
      <p>Something interesting</p>
    </Modal>
  ),
}

export const Error: Story = {
  render: () => (
    <Modal status="error">
      <p>Something interesting</p>
    </Modal>
  ),
}
