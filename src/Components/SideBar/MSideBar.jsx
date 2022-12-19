import { Button, SwipeableDrawer } from '@mui/material'

import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import sideBarData from './SideBarDatas';

export default function MSideBar(props) {




  return (
    
         
          <SwipeableDrawer
          sx={{direction:"ltr"}}
          onClose={() => props.setOpen(prev => !prev)}
            anchor="right"
            open={props.open}
            >
               <ul className="sidebar-wrapper">

            {
  sideBarData.map(item => (
    <li key={item.id} className="sidebar-menu" style={{direction:"rtl"}}>
        <h5 className='sidebar-title'>{item.title}</h5>
        <ul className='sidebar-List'>


            {item.newLi.length && (item.newLi.map(li => (
                <li key={li.id} className='sidebar-ListItem'> <Button className='glow-btn'> <Link to={li.link} className={`navlinks${window.location.pathname === li.link ? " activ" : ""}`}>{li.icon}<span>{li.linkName}</span></Link></Button></li>
            )))}

        </ul>
    </li>
))
}
            </ul>
          </SwipeableDrawer>
       
    
  )
}
