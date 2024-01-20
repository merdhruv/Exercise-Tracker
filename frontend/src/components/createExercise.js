import React,{useState, useEffect} from 'react'
import DatePicker from "react-datepicker"
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateExercise() {
  const [username, setUsername] = useState('');
  const [description, setDesciption] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/user')
    .then(response=>{
      if(response.data.length > 0){
        setUsers(response.data.map(user => user.username))
        setUsername(response.data[0].username )
      }
    })
  },[])

  const onChangeUsername = (e)=>{
    setUsername(e.target.value);
  }
  const onChangeDescription = (e)=>{
    setDesciption(e.target.value);
    console.log("desc running");
  }
  const onChangeDuration = (e)=>{
    setDuration(e.target.value);
  }
  const onChangeDate = (date)=>{
    setDate(date);
  }
  const onsubmit = (e)=>{
    e.preventDefault();

    const exercise = {
      username : username,
      description: description,
      duration : duration,
      date: date, 
    }
    
    console.log(exercise);
    axios.post('http://localhost:5000/exercise/add',exercise)
    .then(res=> console.log(res.data));

    window.location = '/';
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label>Username: </label> 
            <select 
              className='form-control'
              required
              value={username}
              onChange={onChangeUsername}>
                {
                  users.map((user)=>{
                    return<option
                    key={user}
                    value={user}>
                      
                      {user}

                    </option>
                  })
                }
            </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            required
            className='form-control'
            value={description}
            onChange={onChangeDescription}/>
        </div>
        <div className="form-group">
        <label>Duration: </label>
          <input type="text"
            required
            className='form-control'
            value={duration}
            onChange={onChangeDuration}/>
        </div>
        <div className="form-group">
        <label>Date: </label>
          <div>
            <DatePicker
            selected={date}
            onChange={onChangeDate}/>
          </div>
        </div>
        <div className='form-group'>
          <input type="submit" value="Create Exercise log" className='btn-btn-primary'></input>

        </div>
      </form>
    </div>
  )
}
