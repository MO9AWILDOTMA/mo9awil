// components/arrowIcon.tsx
import { FaArrowUp } from 'react-icons/fa'

import './style.css'
import { useState } from 'react'

const ArrowIcon = () => {
  const [isVisible, setIsVisible] = useState();
  return (

    <div className="arrowIcon">
      <a href="#home">
        <FaArrowUp  size={40} color="#8952E0" />
      </a>
    </div> 
  )
}

export default ArrowIcon
