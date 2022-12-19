import React, { useState } from 'react'

import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import PrintIcon from '@mui/icons-material/Print';
import ReplyIcon from '@mui/icons-material/Reply';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AvatarIcon from './../../images/ironman-avatar.jpg'
import WomenDay from './../../images/international-women-s-day-2.png'
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Button, IconButton, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useParams } from 'react-router-dom';
import EmailsData from '../Emails/EmailDatas';
import CustomFontTooltip from '../../Components/CustomFontTooltip/CustomFontTooltip';
import './DetailEmail.css'


export default function DetailEmail() {

    const param = useParams()

    const [email, setEmail] = useState(EmailsData)



    return (
        <div className='detailemail-container' >
            <div className="detailemail-options">
                <div className="detailemail-options-leftside">
                    <Link to={`/React-Dashboard-Admin/emails`}>
                        <CustomFontTooltip title="بازگشت" placement="top" arrow >

                            <IconButton  color='primary'>
                                <ArrowForwardIcon />
                            </IconButton>
                        </CustomFontTooltip>
                    </Link>
                    |
                    <CustomFontTooltip title="آرشیو" placement="top" arrow>

                        <IconButton className='hideBtn' color='primary'>
                            <ArchiveIcon className='hideBtn' />
                        </IconButton>
                    </CustomFontTooltip>
                    <CustomFontTooltip title="علامت گذاری" placement="top" arrow>

                        <IconButton className='hideBtn' color='primary'>
                            <BookmarkBorderIcon className='hideBtn'/>
                        </IconButton>
                    </CustomFontTooltip>
                    <CustomFontTooltip title="حذف" placement="top" arrow>

                        <IconButton color='error'>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </CustomFontTooltip>
                    <CustomFontTooltip title="یادآوری" placement="top" arrow>

                        <IconButton className='hideBtn' color='primary'>
                            <WatchLaterIcon className='hideBtn'/>
                        </IconButton>
                    </CustomFontTooltip>
                    <CustomFontTooltip title="چاپ" placement="top" arrow>

                        <IconButton className='hideBtn' color='primary'>
                            <PrintIcon className='hideBtn'/>
                        </IconButton>
                    </CustomFontTooltip>
                </div>
                <div className="detailemail-options-rightside">
                    <div className="pagenums">

                        صفحه {param.emailID}   از   {EmailsData.length}
                    </div>
                    <div className="detailemail-backfor">
                        <Link to={`/React-Dashboard-Admin/email/${param.emailID <= 1 ? (param.emailID = 1) : (+param.emailID - 1)}`}>
                            <CustomFontTooltip title="ایمیل قبلی" placement="top" arrow >

                                <IconButton color='primary'>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </CustomFontTooltip>
                        </Link>
                        <Link to={`/React-Dashboard-Admin/email/${param.emailID >= EmailsData.length ? (EmailsData.length) : (+param.emailID + 1)}`}>
                            <CustomFontTooltip title="ایمیل بعدی" placement="top" arrow >
                                <IconButton color='primary'>
                                    <ArrowBackIosNewIcon />
                                </IconButton>
                            </CustomFontTooltip>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="detailemail-body">
                <div className="detailemail-body-header">
                    <div className="detailemail-body-header-leftside">
                        <Avatar src={AvatarIcon} />
                        <div className="detailemail-body-header-subject">
                            <span className='detailemail-body-header-subject-title'>این یک ایمیل نمونه است!!!</span>
                            <Link className='link' to={`/React-Dashboard-Admin/email/${param.emailID}/#`}>علی احمدی</Link>
                        </div>
                    </div>
                    <div className="detailemail-body-header-rightside">
                        <span className='detailemail-body-header-rightside-clock'>9 ساعت پیش</span>
                        <StarIcon sx={{ color: "#eec827" }} />
                    </div>
                </div>
                <div className="detailemail-body-body">
                    <div className="detailemail-body-body-msg ">
                        <img src={WomenDay} className="img-fluid" alt="" />
                        <h3 className='detailemail-body-body-msg-title'>روز زن مبارک!!!</h3>
                        <p className='detailemail-body-body-msg-body'>
                            در روز جهانی زن، ما در ThemeWagon از شما می‌خواهیم مهارت‌هایی را که می‌توانید از مربیان بازاریابی دیجیتال زنان شگفت‌انگیز ما بیاموزید، کشف کنید.

                            این همه چیز نیست، هنگامی که در یکی از دوره های آنها ثبت نام می کنید، از کد تبلیغاتی: GirlPower20 استفاده کنید و 20٪ تخفیف به عنوان هدیه روز زن ما به شما دریافت کنید. این پیشنهاد 7 روز دیگر منقضی می‌شود - پس دوره خود را انتخاب کنید و همین امروز ثبت‌نام کنید!
                        </p>
                        <Button variant='contained' className='reg-btn'>ثبت نام</Button>
                    </div>
                </div>
                <div className="detailemail-body-footer">

                <div className="detailemail-body-footer-rightside">
                    <Button variant='outlined' endIcon={<ReplyIcon sx={{marginRight:1,transform: "scaleX(-1)"}}/>} className='reply-btn'>پاسخ</Button>
                    <Button variant='outlined'  endIcon={<ShortcutIcon sx={{marginRight:1,transform: "scaleX(-1)"}}/>} className='forward-btn'>ارسال به</Button>
                    </div>

                    <div className="detailemail-body-footer-leftside">
                        <div className="pagenums">

                            صفحه {param.emailID}   از   {EmailsData.length}
                        </div>
                        <div className="detailemail-backfor">
                            <Link to={`/React-Dashboard-Admin/email/${param.emailID <= 1 ? (param.emailID = 1) : (+param.emailID - 1)}`}>
                                <CustomFontTooltip title="ایمیل قبلی" placement="top" arrow >

                                    <IconButton color='primary'>
                                        <ArrowForwardIosIcon />
                                    </IconButton>
                                </CustomFontTooltip>
                            </Link>
                            <Link to={`/React-Dashboard-Admin/email/${param.emailID >= EmailsData.length ? (EmailsData.length) : (+param.emailID + 1)}`}>
                                <CustomFontTooltip title="ایمیل بعدی" placement="top" arrow >
                                    <IconButton color='primary'>
                                        <ArrowBackIosNewIcon />
                                    </IconButton>
                                </CustomFontTooltip>
                            </Link>
                        </div>
                    </div>



                  
                </div>
            </div>
        </div>
    )
}
