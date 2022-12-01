import { FormControl, InputLabel, MenuItem, Select, TextField, Tab, Tabs, TextareaAutosize, Button, Rating, Stack } from '@mui/material';

import React, { useState, useEffect, useCallback, memo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../../Components/Chart/Chart';
import { ChartData2 } from '../../Components/Chart/ChartData';
import useFetch from '../../Components/Hooks/useFetch';
import TabPanel from '../../Components/TabPanel/TabPanel';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { IconButton } from '@mui/material';
import './Product.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save';
import ZenbookImage from './../../images/products/zenbook.png'

export default function Product() {

  const param = useParams();

  const [product, setProduct] = useState([])
  const [isInStock, setIsInStock] = useState('');
  const [productTitle, setProductTitle] = useState('لپ تاپ ایسوس مدل زنبوک')
  const [productNumber, setProductNumber] = useState('1');
  const [productPrice, setProductPrice] = useState("35,700,000");
  const [tabCount, setTabCount] = useState(0)
  const [fetchSpecs, setFetchSpecs] = useState([])
  const [rated, setRated] = useState(3)
  const [dates, setDates] = useState(dayjs('2022-08-18T21:11:54'))
  const [btnLoading, setBtnLoading] = useState(false)
  const [review, setReview] = useState([])


  useEffect( () => {
     fetch("https://hoseinali3.github.io/fetchAPI/db.json")
      .then(res => res.json())
      .then(data => {
        setFetchSpecs(data.product_specs)
        setReview(data.product_review)
      })},[])
  


  const isInStockChangeHandler = (event) => {
    setIsInStock(event.target.value);
  };


  const changeTitleHandler = event => {
    setProductTitle(event.target.value)
  }
  const changePriceHandler = event => {
    setProductPrice(event.target.value)
  }


  const productNumChangeHandler = event => {

    if (event.target.value < 1) {
      setProductNumber(0)

    } else {
      setProductNumber(event.target.value)
    }
  }


  const tabsChangeHandler = (event, newValue) => {
    setTabCount(newValue);
  }


  const datesChangeHandler = (newValue) => {
    setDates(newValue);
  };


  const btnLoadingChange = () => {
    setBtnLoading(true)
  }


  let mainProduct = product.find(prod => prod.id === +(param.productID))


  return (
    <div className='productDetail-container'>

      <div className="productDetail-pic">
        <h3 className='productDetail-title'>

          <TextField onChange={changeTitleHandler} value={productTitle} inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }} className="productDetail-title-into" id="outlined-basic" label="نام محصول" variant="outlined" />

        </h3>
        <img src={ZenbookImage} className='productDetail-img' alt="" />
        <div className='productDetail-pic-addPhoto'>

          <IconButton component="label">
            <AddToPhotosIcon color='primary' style={{ fontSize: "32px" }} />
            <input type="file" hidden multiple />
          </IconButton>
        </div>
        <div className="thumbs">
          <img src={ZenbookImage} className='productDetail-imgthumb' alt="" />
          <img src={ZenbookImage} className='productDetail-imgthumb' alt="" />
          <img src={ZenbookImage} className='productDetail-imgthumb' alt="" />
          <img src={ZenbookImage} className='productDetail-imgthumb' alt="" />

        </div>
        <ul className='productDetail-pic-list'>
          <li className='productDetail-pic-listitem'>پردازنده اینتل مدل Core i7 1165G7</li>
          <li className='productDetail-pic-listitem'>8 گیگابایت حافظه رم</li>
          <li className='productDetail-pic-listitem'>گرافیک آنبرد</li>
          <li className='productDetail-pic-listitem'>حافظه 1 ترابایتی SSD</li>
          <li className='productDetail-pic-listitem'>wifi نسخه 6</li>
        </ul>
        <div className="productDetail-price-container">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel style={{ fontFamily: "B-yekan" }} id="demo-select-small">موجودی</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={isInStock}
              label="موجودی"
              onChange={isInStockChangeHandler}
              style={{ fontFamily: "B-yekan" }}
            >
              <MenuItem value="">
                None
              </MenuItem>
              <MenuItem style={{ fontFamily: "B-yekan" }} value={true}>موجود</MenuItem>
              <MenuItem style={{ fontFamily: "B-yekan" }} value={false}>ناموجود</MenuItem>

            </Select>
          </FormControl>
          <TextField

            onChange={productNumChangeHandler}
            className='product-number'
            id="outlined-number"
            label="تعداد"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: {

                fontFamily: "B-yekan"
              }
            }}
            value={productNumber}
          />
          <h3 className='productDetail-price'><TextField onChange={changePriceHandler} value={productPrice} InputLabelProps={{ style: { fontFamily: "B-yekan" } }} id="outlined-basic" label="قیمت" variant="outlined" /> <span>تومان</span></h3>
          <Rating
            className='productDetail-rating'
            sx={{ direction: "ltr" }}
            name="simple-controlled"
            value={rated}
            onChange={(event, newValue) => {
              setRated(newValue);
            }}
          />
          <span className='productDetail-rating2'>{"(12 رای)"}</span>
        </div>
      </div>
      <div className="productDetail-chart">
        <div className="productDetail-chartInfo">
          <h3 className='productDetail-chartTitle'>نمودار فروش</h3>
          <Chart grid data={ChartData2} dataKey="فروش" />
        </div>
        <div className="productDetail-save">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                
                label="تاریخ انتشار"
                
                inputFormat="MM/DD/YYYY"
                value={dates}
                onChange={datesChangeHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <LoadingButton

            color="primary"
            onClick={btnLoadingChange}
            loading={btnLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
            sx={{ fontFamily: "B-yekan", fontSize: "20px", direction: "ltr" }}
          >
            ذخیره
          </LoadingButton>

          <Button variant="outlined" size='large' sx={{ fontFamily: "B-yekan", fontSize: "20px" }} color='error'>لغو</Button>
        </div>
      </div>
      <div className="productDetail-desc">
        <Tabs value={tabCount} onChange={tabsChangeHandler} aria-label="basic tabs example">
          <Tab style={{ fontFamily: "B-yekan" }} label="توضیحات" />
          <Tab style={{ fontFamily: "B-yekan" }} label="مشخصات" />
          <Tab style={{ fontFamily: "B-yekan" }} label="نظرات کاربران" />
        </Tabs>
        <TabPanel value={tabCount} index={0}>
          <TextareaAutosize
            className='productDetail-desc1'
          >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio ut illum animi saepe placeat officia repellendus nam, veritatis dignissimos, inventore est nihil in obcaecati. Sit pariatur placeat corporis officiis.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quibusdam sed illo nostrum fuga ad eos officia consequuntur earum ipsam consequatur iure rem quis minima, numquam facere soluta dolorum quidem.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repellat a amet. Cupiditate architecto libero inventore incidunt voluptate dolorem. Tempora veniam minus eligendi vitae nam inventore dolor distinctio consequatur alias?
          </TextareaAutosize>
        </TabPanel>
        <TabPanel value={tabCount} index={1}>
          <div className="product-specs">

            <table className='product-specs-table'>
              <thead>
                <tr className='product-specs-tr'>
                  <td className='product-specs-td td-key'>نام</td>
                  <td className='product-specs-td'>مقدار</td>
                </tr>
              </thead>
              <tbody>
                {
                  fetchSpecs.map((spec, index) => (

                    <tr key={index + 1} className='product-specs-tr'>
                      <td className='product-specs-td td-key' >{spec.key}</td>
                      <td className='product-specs-td'>{spec.value}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={tabCount} index={2}>
          <div className="product-review">
            <ul className='product-review-list'>
              {review.map(rev => (
                <li key={rev.id} className='product-review-listitem'>
                  <Rating
                    className='productDetail-review-rating'
                    sx={{ direction: "ltr" }}
                    name="simple-controlled"
                    value={rev.rating}
                    readOnly
                  />
                  <h5 className="product-review-title">{rev.title}</h5>
                  <span className='product-review-cname'>توسط {rev.c_name} .</span>
                  <span className='product-review-date'>{rev.date}</span>
                  <p className='product-review-desc'>{rev.desc}</p>
                </li>
              ))}
            </ul>

          </div>
        </TabPanel>
      </div>

    </div>
  )
}



