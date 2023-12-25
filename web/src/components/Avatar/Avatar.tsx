import { iconName, indicatorName } from 'types/components'

import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

export interface avatarProps {
  avatar?: string
  alt?: string
  letter?: string
  icon?: iconName
  isSantaHatShowing?: boolean
  indicator?: indicatorName
}

const Avatar = ({
  avatar,
  alt,
  letter,
  icon,
  isSantaHatShowing,
  indicator,
}: avatarProps) => {
  return (
    <div className="relative inline-block">
      {icon ? (
        <div className="center h-18 w-18 rounded-full border-avatar border-vistaBlue bg-spanishGreen text-white">
          <Icon id={icon} size={32} />
        </div>
      ) : avatar ? (
        <img
          src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
      ) : (
        <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter || null}
        </div>
      )}
      {isSantaHatShowing && (
        <img
          src="/images/santa-hat.png"
          alt="santa-hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      )}
      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
