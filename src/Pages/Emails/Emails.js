
import React,{useState , useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import { IconButton } from '@mui/material';
import useFetch from '../../Components/Hooks/useFetch'
import ArchiveIcon from '@mui/icons-material/Archive';
import EmailsData from './EmailDatas';
import './Emails.css'
export default function Emails() {

    const [email, setEmail] = useState([])

  useEffect(() => {
    setEmail(EmailsData)
  },[])
  
  const deleteUser = userID => {
    setEmail(email.filter(user => user.id !== userID))
  }
  

  
  
  
    const columns = [
      { field:"id", headerName: 'ID', width: 90 },
      {
        field: 'title',
        headerName: 'عنوان',
        width: 300,
        renderCell:(params) => {
          return (
            
            <Link to={`/React-Dashboard-Admin/email/${params.row.id}`}>
            <div className="usersListUser">
              <Avatar src='images/ironman-avatar.jpg' className='avatar-icon'/>
           {params.row.title}
            </div>
            </Link>
            
          )
        },
      },
      {
        field: 'desc',
        headerName: 'توضیحات',
        width: 300,
        
      },
      {
        field: 'date',
        headerName: 'تاریخ',
        width: 300,
       
      },
      {
        field: 'action',
        headerName: 'ویرایش',
        width: 300,
       renderCell: (params) => {
        return(
          <div className='actionEmails'>
          <Link to={`/React-Dashboard-Admin/email/${params.row.id}`}>
          <IconButton color='primary'>
          <EditOutlinedIcon/>
          </IconButton>
          </Link>
          <IconButton color='warning'>
          <ArchiveIcon/>
          </IconButton>
          <IconButton color='error'>
  
          <DeleteOutlineIcon style={{color:"red"}} onClick={() => deleteUser(params.row.id)}/>
          </IconButton>
         
          </div>
        )
       }
      },
      
    ];
  
  
    return (
      <div className='data-grid'>
        <DataGrid
        
          rows={email}
          columns={columns}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    )
}
