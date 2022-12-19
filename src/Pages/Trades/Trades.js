import React,{useState} from 'react'
import './Trades.css'
import {ChartData, ChartData5,ChartData6 } from '../../Components/Chart/ChartData'
import MiniChart from '../../Components/MiniChart/MiniChart'
import BarCharts from '../../Components/BarChart/BarCharts'

export default function Trades() {
const [featuresDB, setFeaturesDB] = useState([
    { id: 1, title: "سهام عام", price: "2,400,000", profit_Loss: 11.4, isArrow: true,color:"#1de00b",chart: ChartData5 },
    { id: 2, title: "سهام خاص", price: "4,745,000", profit_Loss: 1.8, isArrow: false,color:"#ffb31a",chart: ChartData6 },
   
])
  return (
    <div className='trades-container'>
        {
            featuresDB.map(item => (
                <MiniChart {...item} key={item.id}/>
            ))
        }
          <BarCharts chart={ChartData} title="سود معاملات" colorchart="#0095ff"/>
          <div className="trade-cards">
            <div className="t-card1">
              <h3 className="t-card-title">مشتریان</h3>
              <h5 className="t-card1-profit">15%+</h5>
              <h4 className='t-card1-num'>45.6K</h4>
            </div>
            <div className="t-card2">
            <h3 className="t-card-title">سفارش ها</h3>
            <h5 className="t-card2-profit">3%-</h5>
            <h4 className='t-card2-num'>2.5K</h4>
            </div>
            <div className="t-card3">
            <h3 className="t-card-title">درآمد</h3>
            <h5 className="t-card3-profit">32%+</h5>
            <h4 className='t-card3-num'>$27.6K</h4>
            </div>
            <div className="t-card4">
            <h3 className="t-card-title">کاربران فعال</h3>
            <h5 className="t-card4-profit">14%+</h5>
            <h4 className='t-card4-num'>3.6K</h4>
            </div>
            <div className="t-card5">
            <h3 className="t-card-title">معامله</h3>
            <h5 className="t-card5-profit">8%-</h5>
            <h4 className='t-card5-num'>$89.6K</h4>
            </div>
            <div className="t-card6">
            <h3 className="t-card-title">بازپرداخت</h3>
            <h5 className="t-card6-profit">3%-</h5>
            <h4 className='t-card6-num'>$32.1K</h4>
            </div>
          </div>
    </div>
  )
}
