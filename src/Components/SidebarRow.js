import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebarrow.css"

const Sidebarrow = ({src , Icon ,title}) => {
  return (
    <div className='SideBarrow'>
    {src && <Avatar src ={src} />}
    {Icon && <Icon />}
    <p>{title}</p>
    </div>
  )
}

export default Sidebarrow