import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Inicio from '../pages/Inicio';
import Register from '../pages/Register';
import Home from '../pages/Home';
import HomeL from '../pages/HomeL';
import Courses from '../pages/Courses';
import CoursesL from '../pages/CoursesL';
import Profile from '../pages/Profile';
import CursosS from '../pages/CoursesS';
import CursosSL from '../pages/CoursesSL';
import Usuarios from '../pages/Usuario';
import Call from '../pages/Llamada';
import EditProfile from '../pages/EditProfile';

import Videollamada from '../pages/videollamada';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/Call' element={<Inicio/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/home' element={<Home/>}/>

          <Route exact path='/homeL' element={<HomeL/>}/>
          <Route exact path='/courses' element={<Courses/>}/>
          <Route exact path='/profile' element={<Profile/>}/>

          <Route exact path='/coursesL' element={<CoursesL/>}/>
          <Route exact path='/coursesS' element={<CursosS/>}/>
          <Route exact path='/coursesSL' element={<CursosSL/>}/>
          <Route exact path='/edit-profile' element={<EditProfile/>}/>
          <Route exact path='/usuarios' element={<Usuarios/>}/>
          <Route exact path='/' element={<Call/>}/>
          <Route exact path='/videollamada' element={<Videollamada/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;