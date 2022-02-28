//import { ProgressBar } from "react-bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "../components/Question";
import Login from '../components/Login'
import Register from "../components/Register";
import Estadisticas from "../components/Estadisticas";
import Home from "../components/Home";
import Perfil from '../components/Perfil'


function App() {
  return (

    <BrowserRouter>

    <Routes>
 
      <Route path='/' exact element={<Login/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/home' exact element={<Home/>}/>

      <Route path='/question' exact element={<Question/>}/>
      <Route path='/estadisticas' exact element={<Estadisticas/>}/>
      <Route path='/perfil' exact element={<Perfil/>}/>

    </Routes>
    
    </BrowserRouter>

)

   
}

export default App;
