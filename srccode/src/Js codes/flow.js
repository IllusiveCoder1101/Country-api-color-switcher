import React from 'react';
import {useState,useContext} from 'react';
import useFetch from './fetch';

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const data=useFetch("https://restcountries.com/v2/all");
    const [ctr,setCtr]=useState(0);
    const [page,setPage]=useState('home')
    const [start,setStart]=useState(1)

    const box=(name="",population=0,region="",capital="",flag="")=>{
        return(<div className="box" onClick={()=>{
            updatectr(1);
            changepage(name);
            }}>
                
            <div>
                <img src={flag} alt="" className="flag"/>
                <h3>{name}</h3>
                <p><em>Population:</em> {population}</p>
                <p><em>Region:</em> {region}</p>
                {(capital)?<p><em>Capital:</em> {capital}</p>:<></>}
            </div>
    
        </div>)
    }

    const changepage=(name)=>{
        setPage(name);
    }

    const updatectr=(value)=>{
        setCtr(value);
    }

    const updstart=()=>{
        setStart(0)
    }

    return(
        <AppContext.Provider value={{data,ctr,page,changepage,updatectr,box,start,updstart}}>
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider}
