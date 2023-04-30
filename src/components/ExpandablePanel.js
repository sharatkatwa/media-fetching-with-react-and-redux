import { useState } from 'react'
import { GoChevronLeft, GoChevronDown } from 'react-icons/go'

function ExpandablePanel({ header, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandedClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center'>
        <div className='flex flex-row items-center justify-between'>
          {header}
        </div>
        <div className='cursor-pointer text-2xl' onClick={handleExpandedClick}>
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isExpanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  )
}

export default ExpandablePanel
