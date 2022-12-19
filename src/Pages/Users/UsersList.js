import React,{ useState, useEffect } from 'react'
import './UsersList.css'
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import { IconButton } from '@mui/material';
import useFetch from '../../Components/Hooks/useFetch';
export default function UsersList() {


  const [users, setUsers] = useFetch([])

  useEffect(() => {
    fetch("https://hoseinali3.github.io/fetchAPI/db.json")
        .then(res => res.json())
        .then(data => setUsers(data.users2))
}, [])

const deleteUser = userID => {
  setUsers(users.filter(user => user.id !== userID))
}

let mainIndex = users.map((user,index) => {
  return index + 1
})




  const columns = [
    { field:"id", headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'کاربر',
      width: 300,
      renderCell:(params) => {
        return (
          
          <Link to={`/React-Dashboard-Admin/user/${params.row.id}`}>
          <div className="usersListUser">
            <Avatar src='images/ironman-avatar.jpg' className='avatar-icon'/>
         {params.row.username}
          </div>
          </Link>
          
        )
      },
    },
    {
      field: 'email',
      headerName: 'ایمیل',
      width: 300,
      
    },
    {
      field: 'price',
      headerName: 'تراکنش',
      width: 300,
     
    },
    {
      field: 'action',
      headerName: 'ویرایش',
      width: 300,
     renderCell: (params) => {
      return(
        <div className='actionUsers'>
        <Link to={`/React-Dashboard-Admin/user/${params.row.id}`}>
        <IconButton color='primary'>
        <EditOutlinedIcon/>
        </IconButton>
        </Link>
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
      
        rows={users}
        columns={columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
