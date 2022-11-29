import React,{useEffect,useState} from 'react'

export default function useFetch(url) {
const [count,setCount] = useState(value)
    

const getProduct = async() => {
    await fetch(url)
          .then(res => res.json())
          .then(data => setProduct(data))
      }


return [getProduct]
}
