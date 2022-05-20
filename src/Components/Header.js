import React from "react";
import './Header.css';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Heading(){
    return(
        
        <div className="header">
        <div className="headerLeft">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png" alt="Facebook logo"/>
        </div>
        <div className="headerInput">
        <SearchIcon />
        <input type="text" placeholder="Search facebook"></input>
        </div>
       
        <div className="headerCenter">
      
        <div className="headerOption headerOption--active">
        <HomeIcon />
        </div>
        
        <div className="headerOption">
        <FlagIcon />
        </div>

        <div className="headerOption">
        <SubscriptionsOutlinedIcon />
        </div>
        </div>
        <div className="header_right">
        
        <div className="header_info">
        <Avatar />
        <h4>My Name</h4>
        </div>

        <div className="headerIn">
        <IconButton>
        <AddIcon />
        </IconButton>
        <IconButton>
        <ForumIcon />
        </IconButton>
        <IconButton>
        <ExpandMoreIcon />
        </IconButton>
        <IconButton>
        <NotificationsActiveIcon />
        </IconButton>
        </div>
        </div>
        </div>
        
        
    );
}
export default Heading;