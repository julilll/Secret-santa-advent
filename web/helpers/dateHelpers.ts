import { formatDistanceToNow } from 'date-fns'

export const prettifyDate = (dateString: string) => {
  const date = new Date(dateString)
  return formatDistanceToNow(date)
}
