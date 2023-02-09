import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

export default function UserDetalis(props) {
    const [selecUser,setSelecUser] = useState('')
    const userId = useParams().userid
    let {users} = props

    useEffect(()=>{
       users.forEach((user)=>{
        if(user.id===userId){
            setSelecUser(user)
        }
       })
    },[])
    
  return (
    <div>
        
        <h1>User Details</h1>
  <div className="content row">
    <div className="col-6">
      <h4>Name</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Username : {selecUser.name}</li>
        <li className="list-group-item">Email: {selecUser.email}</li>
        <li className="list-group-item">
          <h5>Address Details</h5>
          <ul>
            <li>Street</li>
            <li>Suite</li>
            <li>City</li>
            <li>ZipCode</li>
          </ul>
        </li>
        <li className="list-group-item">Phone</li>
        <li className="list-group-item">Website</li>
        <li className="list-group-item">
          <h5>Company Details</h5>
          <ul>
            <li>Name</li>
            <li>Catch Phrasey</li>
            <li>BS</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="col-6">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.-EgxmN52qH7_v62klUUgMgE8DF&pid=Api&P=0"
        className="img-fluid"
        alt="road"
      />
      <p className="text-center">name</p>
    </div>
  </div>
    </div>
  )
}
