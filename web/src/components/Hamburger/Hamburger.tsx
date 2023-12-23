interface hamburgerProps {
  isHamburger: boolean
  toggleNav: () => void
}

const Hamburger = ({ isHamburger, toggleNav }: hamburgerProps) => {
  return (
    <button
      className="flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={toggleNav}
    >
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isHamburger ? '-translate-y-3' : 'rotate-45'
        }`}
      ></div>
      <div
        className={`h-[3px] w-12 bg-black ${isHamburger ? '' : 'hidden'}`}
      ></div>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isHamburger ? 'translate-y-3' : '-rotate-45'
        }`}
      ></div>
    </button>
  )
}

export default Hamburger
