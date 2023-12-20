import { iconName, indicatorName } from 'types/components'

import Icon from '../Icon/Icon'

interface indicatorProps {
  status: indicatorName
}

const indicatorIcons: Record<indicatorName, iconName> = {
  success: 'check',
  warning: 'question',
  error: 'minus',
}

const indicatorStyles: Record<
  indicatorName,
  { bgColor: string; iconColor: string }
> = {
  success: { bgColor: 'bg-spanishGreen', iconColor: 'white' },
  warning: { bgColor: 'bg-supernova', iconColor: 'black' },
  error: { bgColor: 'bg-orangeRed', iconColor: 'white' },
}

const Indicator = ({ status }: indicatorProps) => {
  const { bgColor, iconColor } = indicatorStyles[status]
  return (
    <div className={`indicator ${bgColor} text-${iconColor}`}>
      <Icon id={indicatorIcons[status]} size={16} />
    </div>
  )
}

export default Indicator
