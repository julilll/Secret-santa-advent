import { useState, useEffect } from 'react'

import { Statement } from 'types/components'

import Icon from '../Icon/Icon'
import Overlay from '../Overlay/Overlay'

interface modalProps {
  children: React.ReactNode
  status: Statement
}

const Modal = ({ children, status }: modalProps) => {
  const [isClosed, setIsClosed] = useState(false)
  const closeModal = () => setIsClosed(true)

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    !isClosed && (
      <div className="center fixed inset-0 h-screen w-screen">
        <Overlay />
        <div
          className={`relative w-full max-w-[735px] border-[6px] border-white px-20 py-12 status-${status}`}
        >
          <button className="absolute right-6 top-6" onClick={closeModal}>
            <Icon id="close" size={32} />
          </button>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
