import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './MiniChart.css'
export default function MiniChart(props) {
   
  return (
    <div className='minichart-container'>
      <div className="sale-card">


                    <h4 className='sale-title'>{props.title}</h4>
                    <div className="sale-nums">

                        <span className='sale-price'>{props.price} <span> تومان</span></span>
                        <span className='sale-rate' style={{ color: props.color }}>{props.profit_Loss}%{!props.isArrow ? (<RemoveIcon className='arrow-font'/>) : (<AddIcon  className='arrow-font'/>)}</span>
                    </div>
                </div>


                <ResponsiveContainer width="100%" height="55%">
                    <AreaChart

                        data={props.chart}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        
                        <Area type="monotone" dataKey="uv" stroke={props.color} fill={props.color} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
    
  )
}
