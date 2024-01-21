import { EmailField, Form, Label, TextField, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ListInvitesCell, { QUERY } from 'src/components/ListInvitesCell'

import RoundButton from '../RoundButton/RoundButton'

const CREATE_INVITE_MUTATION = gql`
  mutation createInviteMutation(
    $eventId: String!
    $email: String!
    $name: String!
  ) {
    createInvite(
      input: { eventId: $eventId, status: INVITED, email: $email, name: $name }
    ) {
      email
      id
      name
      status
    }
  }
`

interface InviteGroupProps {
  id: string
}

const InviteGroup = ({ id }: InviteGroupProps) => {
  const formMethods = useForm()
  const [createInvite, { loading }] = useMutation(CREATE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite sent!')
      formMethods.reset()
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
    refetchQueries: [QUERY],
  })

  const handleSubmit = (data) => {
    createInvite({
      variables: { ...data, eventId: id },
    })
  }
  return (
    <div>
      <div className="label text-white">Invite a friend of family member</div>
      <Form onSubmit={handleSubmit} formMethods={formMethods}>
        <fieldset disabled={loading}>
          <div className="mb-10 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-blackPearl">
            <div className="field relative mb-0 flex-1">
              <Label name="name">Name</Label>
              <TextField
                name="name"
                className="input"
                placeholder=""
                validation={{
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                }}
              />
            </div>
            <div className="field relative mb-0 flex-1">
              <Label name="email">Email</Label>
              <EmailField
                name="email"
                className="input"
                placeholder=""
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </div>
            <RoundButton status="warning" type="submit" />
          </div>
        </fieldset>
      </Form>
      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <ListInvitesCell id={id} />
      </div>
    </div>
  )
}

export default InviteGroup
