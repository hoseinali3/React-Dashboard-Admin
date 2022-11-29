import React from 'react'
import './Dashboard_Charts.css'
import { ChartData,ChartData2,ChartData3,ChartData4 } from '../../Components/Chart/ChartData'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

export default function Dashboard_Charts() {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
   
  return (
    <div className='charts-container'>
        <div className="chart1">
          <h3 className="charts-title">بازدید محصولات</h3>
        <ResponsiveContainer  width="100%" height="83%" >
        <AreaChart
          
          data={ChartData3}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="بازدید" stroke="#0088FE" fill="#0088FE" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
        <div className="chart2">
        <h3 className="charts-title">درصدبندی فروش</h3>
        <ResponsiveContainer className="chart2-shape" >
        <PieChart width={800} height={800}>
          <Pie
            data={ChartData2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="فروش"
          >
            {ChartData2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        
      </ResponsiveContainer>
     
      <div className="chart2-detail">
        <span className='noteBookSale'>لپ تاپ</span>
        <span className='homeSale'>لوازم خانگی</span>
        <span className='tvSale'>صوتی و تصویری</span>
        <span className='otherSale'>سایر</span>
      </div>
        </div>
       
      
        <div className="chart3">
        <h3 className="charts-title">نمودار اصلی</h3>
           <ResponsiveContainer width="100%" height="88%">
        <LineChart
          width={500}
          height={300}
          data={ChartData4}
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer></div>
    </div>
  )
}
