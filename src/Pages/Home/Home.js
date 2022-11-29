import React,{useState} from 'react'
import FeaturesSec1 from '../../Components/Features/FeaturesSec1'

import { ChartData, ChartData5, ChartData6, ChartData7 } from '../../Components/Chart/ChartData';

import './Home.css'
import Chart from '../../Components/Chart/Chart'
import Widget1 from '../../Components/Widgets/Widget1'
import Widget2 from '../../Components/Widgets/Widget2'
import MiniChart from '../../Components/MiniChart/MiniChart'
export default function Home() {

  const [featuresDB, setFeaturesDB] = useState([
    { id: 1, title: "درآمد خالص", price: "2,400,000", profit_Loss: 11.4, isArrow: true,color:"#1de00b",chart: ChartData5 },
    { id: 2, title: "فروش کل", price: "4,745,000", profit_Loss: 1.8, isArrow: false,color:"#ffb31a",chart: ChartData6 },
    { id: 3, title: "سهام عام", price: "6,329,000", profit_Loss: 3.7, isArrow: false,color:"#ff1010",chart: ChartData7 },
])


  return (
    <>
    <div className="features-container">

    {featuresDB.map(item => (
             <MiniChart {...item} />
           ))}
           
     <div className="chart-container">

      <Chart grid title="فروش ماهانه" data={ChartData} dataKey="فروش" />
     </div>
     <div className="widgets-conteiner">
      <Widget1></Widget1>
      <Widget2></Widget2>
      
     </div>
      </div>
      
      
    </>
  )
}
