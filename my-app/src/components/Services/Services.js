import React, {useEffect,useState} from 'react'
import Service from '../Service/Service'
import './Services.css'

const Services = () => {
  const[services,setServices]=useState([])
  useEffect(()=>{                               //Database theke data refresh hoye ashe
    fetch('http://localhost:5000/services')
    .then((res)=>res.json())
    .then((data)=>setServices(data))
  },[services]) 

  // delete er jonno code shuru
  const handleDeleteService = (id) => {
    const proceed = window.confirm('Are you SURE?')
    if(proceed){
      const url = `http://localhost:5000/services/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.deleteCount > 0) {
          alert('Deleted Successfully!')
          const remainingServices = services.filter(
            (service) => service._id !== id,
          )
          setServices(remainingServices)
        }
      })
    }
  }
  // delete er jonno code shesh

  return (
    
    <div className='services'>
      {services.map((service)=> (
      <Service realService={service} handleDeleteService=
      {handleDeleteService}></Service>
      ))}
    </div>
  )
}

export default Services
