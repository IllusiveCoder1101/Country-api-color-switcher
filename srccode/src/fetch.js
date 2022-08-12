
import {  useEffect, useState } from "react";

const useFetch = (url) => {
    const [country,setCountry]=useState([])
    const tmpdata=async()=>{
        const data=await fetch(url);
        const country=await data.json();
        setCountry(country);
    }
    useEffect(()=>{
        tmpdata()
    })

    return country;
}

export default useFetch