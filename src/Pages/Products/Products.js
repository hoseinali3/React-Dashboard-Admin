import React,{ useState, useEffect } from 'react'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import { IconButton } from '@mui/material';
export default function Products() {


  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch("https://hoseinali3.github.io/fetchAPI/db.json")
          .then(res => res.json())
          .then(data => setProducts(data.products))
  }, [])

const deleteProducts = productID => {
  setProducts(products.filter(product => product.id !== productID))
}




  const columns = [
    { field:"id", headerName: 'ID', width: 90 },
    {
      field: 'p_name',
      headerName: 'محصول',
      width: 300,
      renderCell:(params) => {
        return (
          
          <Link to={`/React-Dashboard-Admin/product/${params.row.id}`}>
          <div className="productList">
            <img src='images/products/zenbook.png' className='product-img'/>
         {params.row.p_name}
          </div>
          </Link>
          
        )
      },
    },
 
    {
      field: 'price',
      headerName: 'قیمت',
      width: 300,
     
    },
    {
      field: 'action',
      headerName: 'ویرایش',
      width: 300,
     renderCell: (params) => {
      return(
        <div className='actionUsers'>
        <Link to={`/React-Dashboard-Admin/product/${params.row.id}`}>
        <IconButton color='primary'>
        <EditOutlinedIcon/>
        </IconButton>
        </Link>
        <IconButton color='error'>

        <DeleteOutlineIcon style={{color:"red"}} onClick={() => deleteProducts(params.row.id)}/>
        </IconButton>
       
        </div>
      )
     }
    },
    {
      field: 'date',
      headerName: 'آخرین تغییرات',
      width: 300,
     
    },
  ];


  return (
    <div className='data-grid'>
      <DataGrid
      
        rows={products}
        columns={columns}
        
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
