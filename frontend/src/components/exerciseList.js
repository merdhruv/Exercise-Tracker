import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Exercise from './Exercise'



export default function ExerciseList() {

  const [exercise, setExercise] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/exercise/')
    .then(response=>{
      setExercise(response.data)
    })
    .catch((error)=>{
      console.log(error); 
    })
  },[])

  const deleteExercise = (id)=>{
    axios.delete('http//localhost:5000/exercise/'+id)
    .then(res => console.log(res.data));

    setExercise(exercise.filter(el => el._id !== id))
  }

  const exerciseList = ()=>{
    return exercise.map(currentexercise =>{
      return<Exercise exercise={currentexercise} deleteexercise={deleteExercise} key={currentexercise._id} />;
    })
  }
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
    </div>
  )
}
