import type {
  FindEventHeaderQuery,
  FindEventHeaderQueryVariables,
} from 'types/graphql'
import { prettifyDate } from 'web/helpers/dateHelpers'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export const QUERY = gql`
  query FindEventHeaderQuery($id: String!) {
    event(id: $id) {
      date
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
}: CellSuccessProps<FindEventHeaderQuery, FindEventHeaderQueryVariables>) => {
  const handleMatch = () => {
    console.log('match')
  }
  return (
    <>
      <h3 className="font-handwriting text-4xl uppercase text-white">
        {prettifyDate(event.date) + ' until'}
      </h3>
      <div className="flex items-center gap-3">
        <h1 className="m-0 flex-1 p-0 font-condensed text-[166px] uppercase leading-[0.8] text-white">
          {event.name}
        </h1>
        <button className="text-black dark:text-white">
          <Icon id="edit" />
        </button>
        <Button
          size="small"
          className="bg-supernova text-black"
          handleClick={handleMatch}
        >
          Match
        </Button>
      </div>
    </>
  )
}
