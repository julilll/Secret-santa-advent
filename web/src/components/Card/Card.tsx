import Avatar, { avatarProps } from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface cardProps {
  avatar: avatarProps
  name: string
  email?: string
  closable: boolean
}

const Card = ({ avatar, name, email, closable = true }: cardProps) => {
  return (
    <div className="relative ml-5 w-[calc(100%-20px)] bg-white py-6 pl-[72px] pr-5">
      {closable && (
        <button className="absolute right-8 top-8 text-bombay">
          <Icon id="close" />
        </button>
      )}
      <div className="absolute -left-5 top-4">
        <Avatar {...avatar} />
      </div>
      <div>
        <div className="font-sans text-3xl font-bold tracking-tight">
          {name}
        </div>
        <div className="tracking-tight">{email}</div>
      </div>
    </div>
  )
}

export default Card
