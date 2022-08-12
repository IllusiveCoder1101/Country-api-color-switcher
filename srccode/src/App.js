import React from 'react'
import Header from './Header';
import Home from './Home';
import Country from './Country';
import {useGlobalContext} from './flow';
const App = () => {
  const {ctr}=useGlobalContext()
  return (
    <>
    <Header/>
    {page(ctr)}
    </>
  )
}
const page=(ctr)=>{
  if(ctr===0){
    return <Home/>
  }
  else{
    return <Country/>
  }
}
export default App
