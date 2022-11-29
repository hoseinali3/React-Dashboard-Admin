import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './Chart.css'

export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart' >
        <h3 className="chart-title">{title}</h3>
         <ResponsiveContainer aspect={4}>
        <LineChart data={data} >
          <XAxis dataKey="name" stroke="#8884d8" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5" />}
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
