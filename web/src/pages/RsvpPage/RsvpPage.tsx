import { Metadata } from '@redwoodjs/web'

import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <Metadata title="Rsvp" />
      <HeaderWithRulers className="text-white" heading="You're invited to" />
      <h1 className="page-title">Smith Christmas</h1>
      <h3 className="m-0 mb-10 p-0 text-center font-handwriting text-3xl uppercase leading-none text-white">
        December 23, 2023
      </h3>
      <div className="flex justify-center gap-10">
        <RsvpButton status="decline" />
        <RsvpButton status="accept" />
      </div>
    </>
  )
}

export default RsvpPage
