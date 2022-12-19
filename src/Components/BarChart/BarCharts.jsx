import React from 'react'
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './BarCharts.css'
export default function BarCharts(props) {
  return (
    <div className='barchart-container'>
        <h3 className="barchart-title">{props.title}</h3>

         <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={props.chart}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="فروش" fill={props.colorchart} />
          
        </BarChart>
      </ResponsiveContainer>
            
    </div>
  )
}
