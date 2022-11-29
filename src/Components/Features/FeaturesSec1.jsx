import React from 'react'
import './FeaturesSec1.css'
import { Button } from '@mui/material';
import  ArrowDownwardIcon  from '@mui/icons-material/ArrowDownward';
import  ArrowUpwardIcon  from '@mui/icons-material/ArrowUpward';
export default function FeaturesSec1(props) {
  return (
    <div className='feature-item'>

    <Button  className='card-action-container' >
        <div className='card-action'>

        <h4 className='feature-title'>{props.title}</h4>
        <div className="feature-nums">

        <span className='feature-price'>{props.price}  تومان</span>
        <span className='feature-rate' style={!props.isArrow ? {color:"red"}:{color:"green"}}>{props.profit_Loss}{!props.isArrow ? (<ArrowDownwardIcon className='featureIcon negative'/>):(<ArrowUpwardIcon className='featureIcon'/>)}</span>
        </div>
        <span className='feature-content'>محاسبه ماه قبل</span>  
        </div>
    
    </Button>
    </div>
  )
}
