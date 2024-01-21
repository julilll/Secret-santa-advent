import type { ListInvitesQuery } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Card from '../Card/Card'

export const QUERY = gql`
  query ListInvitesQuery($id: String!) {
    event(id: $id) {
      id
      name
      invite {
        email
        id
        name
        user {
          avatar
        }
      }
    }
  }
`

const DELETE_INVITE_MUTATION = gql`
  mutation deleteInviteMutation($id: String!) {
    deleteInvite(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  const [deleteInvite] = useMutation(DELETE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite deleted')
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
    refetchQueries: [QUERY],
  })

  const handleDelete = (inviteId) => {
    console.log(inviteId)
    deleteInvite({
      variables: { id: inviteId },
    })
  }

  return (
    <>
      {event.invite.map(({ email, id, name, user }) => (
        <Card
          key={id}
          email={email}
          name={name}
          avatar={{
            alt: name,
            avatar: user?.avatar,
            letter: name.split('')[0],
          }}
          closable={true}
          handleClose={() => handleDelete(id)}
        />
      ))}
    </>
  )
}
