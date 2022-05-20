import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Post.css';

const Post = ({profPic,userName,
timestamp,
message,imgName}) => {
  return (
    <div className='Post'>
    <div className='PostTop'>
    <Avatar src={profPic} className='postAvatar'/>
    <div className='postTopInfo'>
    <h3>{userName}</h3>
    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
    </div>
    </div>
    <div className='post_bottom'>
    <p>{message}</p>
    </div>
    <div className='postOptions'>
    <div className='postOption'>
    <ThumbUpIcon />
    <p>Like</p>
    </div>
    <div className='postOption'>
    <ChatBubbleOutlinedIcon />
    <p>comment</p>
    </div>
    <div className='postOption'>
    <NearMeIcon />
    <p>Share</p>
    </div>
    <div className='postOption'>
    <AccountCircleIcon />
    <ExpandMoreOutlinedIcon />
    </div>
    
    
    
    </div>
    
    
    
    
    
    </div>
  )
}

export default Post