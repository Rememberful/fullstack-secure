import React, {useEffect, useEffectEvent} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("Colour was changed")
    }, [color])
    
  return (
    <div>
      I am navbar of {color} color 
    </div>
  )
}

export default Navbar
