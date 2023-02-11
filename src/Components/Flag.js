import React, { useState, useEffect } from 'react'

const Flag = ({location}) => {
    
    const [flag, setFlag] = useState()

    useEffect(() => {
        fetch(`https://countryflagsapi.com/png/${location}`)
        .then(response => setFlag(response.url))
 
}, [])

      console.log(flag, 'test')

  return (
    <div>
       <img crossOrigin="anonymous" src={flag} alt="" />
    </div>
  )
}

export default Flag