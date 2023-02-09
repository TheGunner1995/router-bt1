import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function User(props) {
    let {users} = props
    console.log(props);
  return (
    <div>
        <h1>User Page</h1>
  <div className="row">
    {
        users.map((user)=>{
            return <div key={user.id} className="col-3 card my-4">
            <img
              src="https://sm.mashable.com/t/mashable_in/news/c/constantly/constantly-stressed-at-work-it-might-actually-be-changing-yo_cqv3.1200.jpg"
              className="card-img-top"
              alt="Csdvd"
            />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Usename : {user.name}</li>
              <li className="list-group-item">Email: {user.email}</li>
              <li className="list-group-item">Phone:</li>
            </ul>
            <div className="card-body">
              <NavLink className="btn btn-primary" to={'/User/'+ user.id}>Show more details</NavLink>
            </div>
          </div>
        })
    }
    
  </div>
    </div>
  )
}
