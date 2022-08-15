import React,{useState} from 'react'
import {useGlobalContext} from './flow';
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
const Home = () => {
    const {data,box}=useGlobalContext()
    const [place,setPlace]=useState('')
    const [finaldata,setFinalData]=useState(data)
    const [visibility,setVisibility]=useState(false)
    const [start,setStart]=useState(1)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFinalData(data.filter((country)=>country.name.toLowerCase().includes(place.toLowerCase())))
        setPlace('')
        setStart(0)
    }
    return (
    <>
    <div className="inputs">
    <form onSubmit={handleSubmit} className="search">
            <AiOutlineSearch style={{position:"relative",left:"2rem",top:"0rem"}}/>
            <input type="search"  name="search" id="search" value={place}  onChange={(e)=>setPlace(e.target.value)} placeholder={`Search for a Country` } className="input1"/>
        </form>
        <div className="filter">
            <button type="button" onClick={()=>setVisibility(!visibility)} className="filtering">Filter By Region  <BiChevronDown/> </button>
            {
                (visibility)?
                <div className="regions">
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data);setStart(0);setVisibility(false)}} className="btn1">All Regions</button>
                    </li>
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data.filter((country)=>country.region.toLowerCase().includes("africa")));setStart(0);setVisibility(false)}} className="btn1">Africa</button>
                    </li>
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data.filter((country)=>country.region.toLowerCase().includes("america")));setStart(0);setVisibility(false)}} className="btn1">America</button>
                    </li>
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data.filter((country)=>country.region.toLowerCase().includes("asia")));setStart(0);setVisibility(false)}} className="btn1">Asia</button>
                    </li>
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data.filter((country)=>country.region.toLowerCase().includes("europe")));setStart(0);setVisibility(false)}} className="btn1">Europe</button>
                    </li>
                    <li>
                        <button type="button" onClick={()=>{setFinalData(data.filter((country)=>country.region.toLowerCase().includes("oceania")));setStart(0);setVisibility(false)}} className="btn1">Oceania</button>
                    </li>
                </div>:<></>
            }
        </div>
    </div>
    <div className="container">
   
   {
       (start===0)?finaldata.map((country)=>{
        const {flag,name,population,region,capital}=country;
        return (
            <div key={flag} className="container1">
             
            {box(name,population,region,capital,flag)}
        
        </div>
        )
    }):data.map((country)=>{
        const {flag,name,population,region,capital}=country;
        
        return (
            <div key={flag} className="container1">
             
            {box(name,population,region,capital,flag)}
        
        </div>
        )
    })
   }
    </div>
    </>
  )
}

export default Home