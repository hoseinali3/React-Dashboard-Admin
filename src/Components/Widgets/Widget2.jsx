import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import React from 'react'
import './Widget2.css'
import IronManAvarat from './../../images/ironman-avatar.jpg'
import { Button } from '@mui/material';
export default function Widget2() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch("https://hoseinali3.github.io/fetchAPI/db.json")
            .then(res => res.json())
            .then(data => setCustomers(data.customers))
    }, [])

const NewButton = ({type,name}) => {
    return <button className={'widget2btn ' + type}> {name} </button>
}

    return (
        <div className='widget2'>
            <h4 className="widget2-title">آخرین تراکنش ها</h4>
            <table className='widget2-table'>
                <tr className='widget2-tr'>
                    <th className='widget2-th'>مشتری</th>
                    <th className='widget2-th'>تاریخ</th>
                    <th className='widget2-th'>مبلغ</th>
                    <th className='widget2-th'>وضعیت</th>
                </tr>
                {customers.map(user => (
                    
                        <Button key={user.id} className='glow-btn2'>
                    <tr className='widget2-tr'>
                    <td className='widget2-user'>
                    <Avatar className='avatar-icon2' src={IronManAvarat} />
                    <span className='widget2-customer'>{user.username}</span>
                    </td>
                    <td className='widget2-date'>{user.date}</td>
                    <td className='widget2-amount'>{user.price} تومان</td>
                    <td className='widget2-status'><NewButton type={user.status2} name={user.status}/></td>
                </tr>
                    </Button>
                    ))}
            </table>
               
            
        </div>
    )
}
