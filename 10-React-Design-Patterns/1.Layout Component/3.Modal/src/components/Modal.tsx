import { useState, type ReactNode } from "react";

const Modal = ({children}: {children: ReactNode}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={()=>setShowModal(true)} className="border p-5 bg-gray-300 mt-2 ml-2">Show Modal</button>
      {showModal && (
        <section className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black opacity-80" onClick={()=>setShowModal(false)}>
            <div className="bg-white mx-[10%] my-auto p-[20px] w-[50%]" onClick={(e:React.MouseEvent<HTMLDivElement>)=>(e.stopPropagation())}>
                <button className="border p-5 bg-gray-300" onClick={()=>setShowModal(false)}>
                    Hide Modal
                </button>
                {children}
            </div>
        </section>
      )}
    </>
  );
};

export default Modal;
