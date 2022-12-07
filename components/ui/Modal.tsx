import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Modal({ show, title = "Message", children  }) {
  const [isOpen, setOpen] = useState(show)

  return show && (
      <Dialog as="div" open={isOpen} static className="relative z-10" onClose={() => {setOpen(false)}}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center text-xl rounded-full bg-green-100">
                    { title }
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    {children}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full border border-transparent shadow-sm px-4 py-2 bg-yellow text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
          </div>
        </div>
      </Dialog>
  )
}
