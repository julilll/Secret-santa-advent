import Card, { cardProps } from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'

interface InviteGroupProps {
  cards: cardProps[]
}

const InviteGroup = ({ cards }: InviteGroupProps) => {
  return (
    <div>
      <div className="label ml-5">Invite a friend of family member</div>
      <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-nileBlue">
        <div className="field relative mb-0 flex-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="" />
        </div>
        <div className="field relative mb-0 flex-1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="" />
        </div>
        <RoundButton status="warning" />
      </div>
      {cards?.length > 0 && (
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {cards?.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  )
}

export default InviteGroup
