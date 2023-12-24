import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => {
    return (
      <Form>
        <Checkbox label="label" name="name" />
      </Form>
    )
  },
}
