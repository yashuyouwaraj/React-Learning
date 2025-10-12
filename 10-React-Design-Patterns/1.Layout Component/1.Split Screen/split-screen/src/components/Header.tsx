import { CgProfile } from "react-icons/cg"
import { MdLogout } from "react-icons/md"

const Header = () => {
  return (
      <header className="flex justify-between p-4 items-center text-white bg-teal-600">
        <h1 className="text-xl">My Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-3xl hover:cursor-pointer"><CgProfile /></button>
          <button className="text-3xl hover:cursor-pointer"><MdLogout /></button>
        </div>
      </header>
  )
}

export default Header