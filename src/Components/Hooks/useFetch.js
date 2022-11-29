import React,{useState,useEffect} from 'react'

export default function useFetch(url) {

    const [fetchGet,setFetchGet] = useState([])
    const [fetchComp,setFetchComp] = useState(false)

const getAPI = async() => {
   await fetch(url)
    .then(res => res.json())
    .then(data => setFetchGet(data))
    setFetchComp(prev => !prev)
}



    useEffect(() => {
        getAPI()
    },[])

    return [fetchGet,setFetchGet,fetchComp,setFetchComp]

}
