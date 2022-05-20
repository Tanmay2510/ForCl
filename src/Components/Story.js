import { Avatar } from '@mui/material';
import React from 'react'
import "./Story.css"
const Story = ({image,profilesrc,title}) => {
  return (
    <div className='story' 
    style={{backgroundImage:`url(${image})`}}>
    <Avatar src = {profilesrc} className='storyAvat' />
    <h4>{title}</h4>
    </div>
  )
}

export default Story