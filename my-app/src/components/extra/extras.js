import React, {useEffect,useState} from 'react'
import Extra from '../extra/extra'

const Extras = () => {
  const[services,setServices]=useState([])
  useEffect(()=>{                               //Database theke data refresh hoye ashe
    fetch('http://localhost:5000/extra')
    .then((res)=>res.json())
    .then((data)=>setServices(data))
  },[services]) 

  return (
    
    <div className='services'>
      {services.map((service)=> (
      <Extra realService={service}></Extra>
      ))}
    </div>
  )
}

export default Extras
