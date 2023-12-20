import { useState } from 'react'

import { Label, PasswordField, TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

interface ShowHidePasswordProps {
  label: string
  name: string
}

const ShowHidePassword = ({ label, name, ...rest }: ShowHidePasswordProps) => {
  const [isPasswordShowing, setisPasswordShowing] = useState(false)

  const handleClick = () => {
    setisPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <Label name={name}>{label}</Label>
      {isPasswordShowing ? (
        <TextField name={name} placeholder="" {...rest} />
      ) : (
        <PasswordField name={name} placeholder="" {...rest} />
      )}
      <button className="absolute right-6 top-8" onClick={handleClick}>
        <Icon id={isPasswordShowing ? 'eyeOpened' : 'eyeClosed'} size={32} />
      </button>
    </div>
  )
}

export default ShowHidePassword
