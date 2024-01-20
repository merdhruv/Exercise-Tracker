import React from 'react'
import {Link} from 'react-router-dom';

export default function Exercise({exercise,deleteexercise}) {
  return (

      <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0,10)}</td>
        <td>
        <Link to={"/edit/:"+exercise._id}>edit</Link> | <button onClick={()=>{deleteexercise(exercise._id)}}>delete</button>
        </td>
    </tr>

  )
}
