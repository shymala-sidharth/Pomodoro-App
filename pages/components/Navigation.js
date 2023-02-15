import { FiSettings, FiClock } from 'react-icons/fi'

export default function Navigation() {
  return (
    <>
      <nav className="pt-10 text-white flex justify-between w-11/12 mx-auto">
        <div className="flex item-center gap-5 cursor-pointer">
          <FiClock className="text-3xl text-white" />
        </div>
        <FiSettings className="text-3xl cursor-pointer" />
      </nav>
    </>
  )
}
