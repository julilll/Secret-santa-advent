import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import ShowHidePassword from './ShowHidePassword'

const meta: Meta<typeof ShowHidePassword> = {
  component: ShowHidePassword,
}

export default meta

type Story = StoryObj<typeof ShowHidePassword>

export const Password: Story = {
  render: () => (
    <Form>
      <ShowHidePassword label="Password" name="password" />
    </Form>
  ),
}
