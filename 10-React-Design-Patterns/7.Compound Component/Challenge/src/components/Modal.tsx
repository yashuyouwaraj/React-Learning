import type { ReactNode } from "react"
import ModalTitle from "./ModalTitle"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const Modal = ({children}:{children:ReactNode}) => {
  return (
    <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-[20rem]">
            {children}
        </div>
    </div>
  )
}

Modal.title=ModalTitle
Modal.body=ModalBody
Modal.footer=ModalFooter

export default Modal