import React from 'react'
import {useGlobalContext} from './flow';
import {BiArrowBack} from 'react-icons/bi'
const Country = () => {

  const {updatectr,page,changepage,data}=useGlobalContext()
  const finaldata=data.filter((country)=>country.name===page)

  return (
    <>
      <button onClick={()=>{
        updatectr(0);
        changepage('home')
      }} className="back"><BiArrowBack/> Back</button>
      <div>
        {
          finaldata.map((country)=>{
            const {flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders}=country;
            return(
              <div className="dataCountry" >
                <img src={flag} alt="" className="flags"/>
                <div>
                  <h1>{name}</h1>
                  <div className="details">
                    <div>
                      {(nativeName)?<h2><em>Native Name:</em>  {nativeName}</h2>:<></>}
                      {(population)?<h2><em>Population:</em>  {population}</h2>:<></>}
                      {(region)?<h2><em>Region:</em> {region}</h2>:<></>}
                      {(subregion)?<h2><em>Sub Region:</em> {subregion}</h2>:<></>}
                      {(capital)?<h2><em>Capital:</em> {capital}</h2>:<></>}
                    </div>
                    <div>
                      {(topLevelDomain)?<h2><em>Top Level Domain: </em> {topLevelDomain[0]}</h2>:<></>}
                      {(currencies)?<h2><em>Currency: </em> {currencies[0].name}</h2>:<></>}
                      {(languages)?<h2><em>Languages: </em>{
                        languages.map((language)=>{
                          const {name}=language;
                          let str="";
                          if(languages.length>1){
                            if(languages.indexOf(language)+1!==languages.length){
                              str=str+name+",";
                            }
                            else{
                              str=str+name;
                            }
                            return str
                          }
                          else{
                            return name;
                          }
                        })}</h2>:<></>}
                    </div>
                    {(borders)?<div className="border">
                      <h2><em>Border Countries:</em></h2>
                      <div className="countries" >
                        {
                          borders.map((border)=>{
                            return(
                              <section className="borderCountry">{border}</section>
                            )
                          })
                        }
                      </div>
                    </div>:<></>}
                    
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default Country