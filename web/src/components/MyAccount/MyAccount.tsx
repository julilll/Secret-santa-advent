import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccount = () => {
  const [dropdownShowing, setDropdownShowing] = useState(false)

  const toggleDropdown = () => {
    setDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div>
      <button
        className="flex items-center gap-2 text-black dark:text-white "
        onClick={toggleDropdown}
      >
        <motion.div animate={{ rotate: dropdownShowing ? '-180deg' : '0' }}>
          <Icon id="chevron" />
        </motion.div>
        <Avatar
          avatar="/images/placeholder__avatar-01.png"
          alt="Amy Winehouse"
        />
        <div className="text-left">
          <div className="text-sm">Logged in as</div>
          <div className="text-lg font-bold">Cody Fisher</div>
        </div>
      </button>
      <AnimatePresence>
        {dropdownShowing && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="dropdown inline-block bg-white py-5 pl-4 pr-5"
          >
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="user" size={32} />
                </div>
                My Account
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="calendar" size={32} />
                </div>
                My Event
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="logout" size={32} />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
