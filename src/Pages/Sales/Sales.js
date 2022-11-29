import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData, ChartData5, ChartData6, ChartData7, ChartData8 } from '../../Components/Chart/ChartData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Sales.css'
import Widget2 from '../../Components/Widgets/Widget2';
import MiniChart from '../../Components/MiniChart/MiniChart';
export default function Sales() {

    const [featuresDB, setFeaturesDB] = useState([
        { id: 1, title: "درآمد خالص", price: "2,400,000", profit_Loss: 11.4, isArrow: true,color:"#1de00b",chart: ChartData5 },
        { id: 2, title: "فروش کل", price: "4,745,000", profit_Loss: 1.8, isArrow: false,color:"#ffb31a",chart: ChartData6 },
        { id: 3, title: "سهام عام", price: "6,329,000", profit_Loss: 3.7, isArrow: false,color:"#ff1010",chart: ChartData7 },
        { id: 4, title: "سهام خاص", price: "3,500,000", profit_Loss: 5.9, isArrow: true,color:"#002ed3",chart: ChartData8 },
    ])

    return (
        <div className='sales-container'>
           
           {featuresDB.map(item => (
             <MiniChart {...item} />
           ))}
           
           
            <div className="sale-box5">
                <Widget2></Widget2>
            </div>
        </div>
    )
}
