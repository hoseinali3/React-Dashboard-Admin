import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import React from 'react'
import './Widget1.css'
import IronManAvarat from './../../images/ironman-avatar.jpg'
import { Button } from '@mui/material';
export default function Widget1() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://hoseinali3.github.io/fetchAPI/db.json")
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])



    return (
        <div className='widget1'>
            <h4 className="widget-title">کارکنان</h4>
            <ul className="widget-list">
                {users.map(user => (
                    
                        <Button key={user.id} className='glow-btn'>
                    <li  className="widget-listItem">
                        <Avatar className='avatar-icon' src={IronManAvarat} />
                        <div className="user">
                            <span className="user-name">{user.username}</span>
                            <span className="user-job">{user.job}</span>
                            <div className='show-user'>
                                <IconButton color='primary'>

                                    <RemoveRedEyeOutlinedIcon style={{ color: "#8a8a8a" }} />
                                </IconButton>
                            </div>
                        </div>
                    </li>
                    </Button>
                ))}
            </ul>
        </div>
    )
}
