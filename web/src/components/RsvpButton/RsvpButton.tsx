import { iconName, rsvpStatus } from 'types/components'

import Icon from '../Icon/Icon'

interface RsvpButtonProps {
  status: rsvpStatus
}

const types: Record<
  rsvpStatus,
  { className: string; icon: iconName; heading: string }
> = {
  accept: {
    className: 'bg-orangeRed',
    icon: 'thumbsDown',
    heading: 'Regretfully Decline',
  },
  decline: {
    className: 'bg-spanishGreen',
    icon: 'thumbsUp',
    heading: "I'll be there!",
  },
}

const RsvpButton = ({ status }: RsvpButtonProps) => {
  return (
    <button className="relative ml-[72px] h-[115px] max-w-[300px] bg-white pl-[72px] pr-12 text-left text-3xl font-bold leading-none tracking-tight">
      <div
        className={`center absolute -left-[72px] -top-2 h-[132px] w-[132px] rounded-full border-[6px] border-white text-white ${types[status].className}`}
      >
        <Icon id={types[status].icon} size={72} />
      </div>
      {types[status].heading}
    </button>
  )
}

export default RsvpButton
