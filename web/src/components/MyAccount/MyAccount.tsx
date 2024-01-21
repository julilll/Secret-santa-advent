import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccount = () => {
  const [dropdownShowing, setDropdownShowing] = useState(false)
  const { isAuthenticated, logOut } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login())
    }
  }, [isAuthenticated])

  const toggleDropdown = () => {
    setDropdownShowing((prevValue) => !prevValue)
  }

  const logoutHandler = async () => {
    await logOut()
  }

  return (
    <div className="relative">
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
            className="dropdown absolute top-24 inline-block bg-white py-5 pl-4 pr-5"
          >
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer">
                <div className="text-pastelMagenta">
                  <Icon id="user" size={32} />
                </div>
                My Account
              </li>
              <li className="cursor-pointer">
                <div className="text-pastelMagenta">
                  <Icon id="calendar" size={32} />
                </div>
                My Event
              </li>
              <li className="cursor-pointer" onClick={logoutHandler}>
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
