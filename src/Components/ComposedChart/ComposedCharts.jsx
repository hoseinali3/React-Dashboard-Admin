import React from 'react'
import {
    ComposedChart,
    BarChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import './ComposedCharts.css'
export default function ComposedCharts(props) {
  return (
<div className='composedchart-container'>

    <h3 className="composedchart-title">{props.title}</h3>
    <ResponsiveContainer width="100%" height="88%">
        <ComposedChart
          width={500}
          height={400}
          data={props.charts}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill={props.barcolor} />
          <Line type="monotone" dataKey="uv" stroke={props.linecolor} />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
  )
}
