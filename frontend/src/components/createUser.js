import React, { useState } from 'react'
import axios from "axios";

export default function CreateUser() {
  const[username,setUsername] = useState('');
  
  const onChangeUsername=(e)=>{
    setUsername(e.target.value);
  }
  const onSubmit = (e)=>{
    e.preventDefault();

    const user = {username: username}
    console.log(user)

    axios.post('http://localhost:5000/user/add', user) 
    .then(res => console.log(res.data));

    setUsername(' ');
  }
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label> 
            <input type="text"
              className='form-control'
              required
              value={username }
              onChange={onChangeUsername}>
                 
            </input>
        </div>
       

        <div className='form-group'>
          <input type="submit" value="Create User" className='btn-btn-primary'></input>

        </div>
      </form>
    </div>
  )
}
