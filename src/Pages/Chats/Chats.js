import React, { useState, useEffect } from 'react'
import './Chats.css'
import ironManAvatar from '../../images/ironman-avatar.jpg'
import chatDatas from './ChatDatas'
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Avatar, Button, IconButton, Badge, Divider } from '@mui/material';



export default function Chats() {
    const [chatUser, setChatUser] = useState(chatDatas)
    const [activeUser, setActiveUser] = useState(null)
    const [userName,setUserName] = useState(null)

    

    useEffect(() => {
        let newUser = chatUser.find(user => (
            user.id === activeUser
        ))
        setUserName(activeUser ? newUser.username : "علی")
    }, [activeUser])

    return (
        <div className='chats-container'>
            <div className="chats-body">
                <div className="chats-body-leftside ">
                    <div className="chats-searchbox">

                        <input type="text" placeholder='جست و جوی کاربران...' className='searchbox-input' />
                        <SearchIcon className='searchbox-icon' />
                    </div>
                    <Divider className='Bdarker' />

                    <ul className='chat-userlist scroll-Body'>
                        {
                            chatUser.map(user => (
                                <li key={user.id} className={activeUser === user.id ? 'chat-userlistitem active' : `chat-userlistitem ${user.active && !activeUser ? "active" : ""}`} onClick={() => setActiveUser(user.id)}>
                                    <Avatar src={ironManAvatar} />
                                    <div className="chat-titles">
                                        <span className='chat-username'>{user.username}</span>
                                        <span className='chat-lastmsg'>{user.lastmsg}</span>
                                    </div>
                                    <div className="chat-title-icons">
                                        {user.seen ? <DoneAllIcon sx={{ fontSize: 17 }} /> : <DoneIcon sx={{ fontSize: 17 }} />}
                                        <span className='chat-date'>{user.date}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="chats-body-rightside">
                    <div className="chatbox-container">
                        <div className="chatbox-header">

                         <div className="chatbox-header-rightside">   <Badge
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                color="success"
                                badgeContent=" "
                                overlap="circular"
                            >
                                <Avatar src={ironManAvatar} sx={{ width: 60, height: "auto" }} />
                            </Badge>
                            <div className="chatbox-titles">
                                <h4 className='chatbox-username'>{userName}</h4>
                                <span className='chatbox-isonlineuser'>آنلاین</span>
                            </div></div>
                         <div className="chatbox-header-leftside">

                            <IconButton color='success' className='header-icon'><CallIcon/></IconButton>
                            <IconButton color='primary' className='header-icon'><VideoCallIcon/></IconButton>
                            <IconButton  className='header-icon'><MoreVertIcon/></IconButton>
                         </div>
                        </div>
                        <Divider className='Bdarker' />
                        <div className="chatbox-body scroll-Body">


                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>سلام خوبید؟</p>
                                <span className='time-msg'>9:24am</span>

                            </div>
                            <div className="chatbox-my-msg-container">
                                <p className='my-msg'>بله ممنونم در خدمتتون هستم</p>
                                <span className='time-msg'>9:30am</span>
                                <DoneIcon sx={{ fontSize: 17 }} />
                            </div>
                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>سوالی داشتم از خدمتتون</p>
                                <span className='time-msg'>9:32am</span>

                            </div>
                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>به چه صورت میتونم از سایت خرید کنم</p>
                                <span className='time-msg'>9:32am</span>

                            </div>
                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>و اینکه آیا کد تخفیف هم میدید؟</p>
                                <span className='time-msg'>9:33am</span>

                            </div>
                            <div className="chatbox-my-msg-container">
                                <p className='my-msg'>میتونید از طریق فروشگاه خرید کنید. <br /> بله کد تخفیف هم داریم</p>
                                <span className='time-msg'>9:34am</span>
                                <DoneIcon sx={{ fontSize: 17 }} />
                            </div>
                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>ممنونم از شما</p>
                                <span className='time-msg'>9:35am</span>

                            </div>
                            <div className="chatbox-user-msg-container">
                                <p className='user-msg'>حتما خرید میکنم!!!</p>
                                <span className='time-msg'>9:35am</span>

                            </div>
                        </div>
                        <Divider className='Bdarker' />

                        <div className="chatbox-footer">
                            <input type="text" className='chatbox-inputbox' placeholder='پیام...' />
                            <div className="chatbox-btns">
                                <IconButton color='warning'><InsertEmoticonIcon /></IconButton>

                                <IconButton color='primary' component="label">
                                    <PhotoSizeSelectActualIcon />
                                    <input type="file" hidden multiple />
                                </IconButton>
                                <IconButton color='success' component="label">
                                    <AttachFileIcon />
                                    <input type="file" hidden multiple />
                                </IconButton>
                                <Button variant='contained' className='chatbox-sendBtn'>ارسال</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
