import React from 'react'
import {useState,useEffect} from 'react';
import {BsMoon} from 'react-icons/bs';
const getLocalStorage=()=>{
    let theme="light";
    if(localStorage.getItem('theme')){
       theme=localStorage.getItem('theme');
    }
    return theme;
}
const Header = () => {
  const [theme,setTheme]=useState(getLocalStorage());
  const themechanger=()=>{
      if(theme==="light"){
          setTheme('dark')
      }
      else{
          setTheme('light')
      }
  }  
  useEffect(()=>{
      document.documentElement.className=theme;
      localStorage.setItem('theme',theme);
  },[theme])
  return (
    <div className="nav">
        <h1 className="logo">Where in the world?</h1>
        <button type="button" onClick={()=>themechanger()} className="btn"><BsMoon/> Dark Mode</button>
    </div>
  )
}

export default Header