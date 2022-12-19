import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import './ComposeMail.css'
import { ToggleButton, ToggleButtonGroup,Button,IconButton } from '@mui/material';
import CustomFontTooltip from '../../Components/CustomFontTooltip/CustomFontTooltip';
export default function ComposeMail() {


    const [formats, setFormats] = useState(() => ['bold']);
    const [alignment, setAlignment] = useState('right');
    const [sendTo,setSendTo] = useState("")
    const [subject,setSubject] = useState("")
    const [desc,setDesc] = useState("")

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
   
  
    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };



    return (
        <div className='ComposeMail-container'>
            <div className="composemail-body">
                <div className="composemail-header">
                    <h4 className='composemail-header-rightside'>ایمیل جدید</h4>
                    <div className='composemail-header-leftside'>
                    <Link to={`/React-Dashboard-Admin/emails`}>

                    <CustomFontTooltip title="حذف" placement="top" arrow >

                        <IconButton color='error'><DeleteOutlineIcon/></IconButton>
                    </CustomFontTooltip>
                    </Link>
                    </div>
                </div>
                <input type="text" className='composemail-sendto' placeholder='ارسال به...' value={sendTo} onChange={event => setSendTo(event.target.value)}/>
                <Divider className='Bdarker' />
                <input type="text" className='composemail-subject' placeholder='موضوع' value={subject} onChange={event => setSubject(event.target.value)}/>
                <Divider className='Bdarker' />


                <ToggleButtonGroup
                sx={{direction:"ltr",padding:"1em"}}
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color" >
                        <FormatColorFillIcon />
                        <ArrowDropDownIcon />
                    </ToggleButton>
                    
                    
                </ToggleButtonGroup>
                <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{direction:"ltr"}}
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
                <Divider className='Bdarker' />
<textarea className='composemail-desc scroll-Body' placeholder='متن ایمیل...' value={desc} onChange={event => setDesc(event.target.value)}></textarea>
                <Divider className='Bdarker' />
                <div className="composemail-footer">
                   <div className="composemail-footer-leftside">
                   <Link to={`/React-Dashboard-Admin/emails`}>

                   <Button variant='outlined' startIcon={<DeleteOutlineIcon sx={{marginLeft:1}}/>} color='error' className='composemail-removeBtn'>حذف</Button>
                   </Link>
                    
                   </div>
                   <div className="composemail-footer-rightside">
                   <IconButton component="label">
                    <AttachFileIcon/>
                   <input type="file" hidden multiple />
                   </IconButton>
             
                    <IconButton component="label">
                        <PhotoSizeSelectActualIcon/>
                    <input type="file" hidden multiple /></IconButton>
                    <Button variant='contained' className='composemail-sendBtn'>ارسال</Button>
                   </div>
                </div>
            </div>
        </div>
    )
}
