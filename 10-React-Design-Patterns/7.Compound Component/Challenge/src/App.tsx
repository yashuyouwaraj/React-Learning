import { useState } from "react"
import Modal from "./components/Modal"

const App = () => {
  const [isModalOpen,setIsModalOpen]=useState<boolean>(false)
  const openModal=()=>setIsModalOpen(true)
  const closeModal=()=>setIsModalOpen(false)
  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 bg-green-400 text-white rounded-md">Open Modal</button>

      {isModalOpen && (
        <Modal>
          <Modal.title>Modal Title</Modal.title>
          <Modal.body>This is the body of the modal</Modal.body>
          <Modal.footer>
            <button onClick={closeModal} className="px-4 py-2 text-white bg-gray-500 rounded-md text-sm">Cancel</button>
            <button onClick={closeModal} className="px-4 py-2 text-white bg-teal-500 ml-[0.3rem] rounded-md text-sm">Confirm</button>
          </Modal.footer>
        </Modal>
      )}
    </div>
  )
}

export default App