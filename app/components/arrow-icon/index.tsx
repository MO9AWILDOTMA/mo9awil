// components/arrowIcon.tsx
import { FaArrowUp } from 'react-icons/fa'

import { useEffect, useState } from 'react'

import './style.css'

const ArrowIcon = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down from the top
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Call handleScroll immediately to check the initial scroll position
    handleScroll()

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div hidden={!isVisible} className="arrowIcon">
      <a href="#home">
        <FaArrowUp size={40} color="#8952E0" />
      </a>
    </div>
  )
}

export default ArrowIcon
