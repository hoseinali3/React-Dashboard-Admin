import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShopLogo from './../../images/online-shopping-logo-design-with-a-tablet-under-vector-133148.png'
import IronManAvarat from './../../images/ironman-avatar.jpg'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbar-wrapper">

            <div className="topbar-leftside">
                <img src={ShopLogo} alt="" />
            </div>
            <div className="topbar-rightside">
                    <div className="topbar-icon-container">
                    <IconButton color='primary'>
                    <Badge color="primary" badgeContent="2">

                    <NotificationsNoneIcon style={{color:"#8a8a8a"}} />
                    </Badge>
                    </IconButton>
                    
                    </div>
                    <div className="topbar-icon-container">
                    <IconButton color='primary'>
                    <Badge color="primary" badgeContent="2">

                    <LanguageIcon style={{color:"#8a8a8a"}}/>
                    </Badge>
                    </IconButton>
                    </div>
                    <div className="topbar-icon-container">
                    <IconButton color='primary'>
                    <Badge color="primary" badgeContent="2">
                    <SettingsIcon style={{color:"#8a8a8a"}}/>
                    </Badge>
                    </IconButton>
                    </div>
                    <IconButton color='primary'>

                    <Avatar className='avatar-icon' src={IronManAvarat}/>
                    </IconButton>
            </div>
        </div>
    </div>
  )
}
