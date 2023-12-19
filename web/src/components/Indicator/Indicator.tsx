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
  success: { bgColor: 'spanishGreen', iconColor: 'white' },
  warning: { bgColor: 'supernova', iconColor: 'black' },
  error: { bgColor: 'orangeRed', iconColor: 'white' },
}

const Indicator = ({ status }: indicatorProps) => {
  const { bgColor, iconColor } = indicatorStyles[status]
  return (
    <div className={`indicator bg-${bgColor} text-${iconColor}`}>
      <Icon id={indicatorIcons[status]} size={16} />
    </div>
  )
}

export default Indicator
