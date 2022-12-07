/* This example requires Tailwind CSS v2.0+ */
import { ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid'

const getIcon = ( messageType = 'danger') => {
  switch(messageType){
    case 'warning':
      return (<ExclamationTriangleIcon className="h-5 w-5 text-white" aria-hidden="true" />)
    case 'danger':
    default:
      return (<XCircleIcon className="h-5 w-5 text-danger" aria-hidden="true" />)
  }
}


export default function Message({messageType = 'danger', messageText = null, title = 'Attention Needed', children }) {
  return (
    <div className={`rounded-md bg-white border border-white`}>
      <div className={`p-4 bg-${messageType}/20 rounded-md`}>
        <div className="flex">
          <div className="flex-shrink-0">
            { getIcon(messageType) }
          </div>
          <div className="ml-3 text-left">
            <h3 className="text-lg font-bold text-black">{ title }</h3>
            <div className="mt-2 text-sm text-black">
              <p>
                { children || messageText }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}