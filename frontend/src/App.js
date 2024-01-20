import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



import Navbar from "./components/Navbar";
import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

function App() {
  return (
  <Router>
    <div className='container'>
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" element = {<ExerciseList/>}/>
        <Route path="/edit/:id" element={<EditExercise/>}/>
        <Route path="/create" element={<CreateExercise/>}/>
        <Route path="/user" element={<CreateUser/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
