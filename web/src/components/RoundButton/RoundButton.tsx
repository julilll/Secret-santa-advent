import { Statement } from 'types/components'

import Icon from '../Icon/Icon'

interface RoundButtonProps {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  status: Statement
  type: 'button' | 'submit' | 'reset'
}

const RoundButton = ({
  handleClick = () => {},
  status,
  type,
}: RoundButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`round-button center h-16 w-16 rounded-full border-2 border-white status-${status}`}
    >
      <Icon id={status === 'error' ? 'close' : 'plus'} />
    </button>
  )
}

export default RoundButton
