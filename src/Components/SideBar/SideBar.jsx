import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch';
import { Link, NavLink } from 'react-router-dom'
import './SideBar.css'
import Button from '@mui/material/Button'

import sideBarData from './SideBarDatas';


export default function SideBar() {
    // const [sidebarLi,setSideBarLi] = useFetch("http://localhost:4000/sidebarListItem");

    return (
        <div className='sidebar'>
            <ul className="sidebar-wrapper">



                {
                    sideBarData.map(item => (
                        <li key={item.id} className="sidebar-menu">
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
        </div>
    )
}
