import React from 'react'
import styled from 'styled-components'

const Videosection = ({product, userId}) => {

  return (
    
    <div className='ytvideo'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rnwzoJp1EqQ?controls=0" 
          allow="accelerometer; autoplay;
         gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Videosection