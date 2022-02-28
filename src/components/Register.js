import React,{ useState} from 'react'
import axios from 'axios'
import {urlE, urlR} from '../helpers/url'


function Register() {

      const [registro, setRegistro]= useState({
        id: "",
        correo: "",
        contraseña:"",
    })
    

    const handleOnchange = ({target}) =>{
      setRegistro({
        ...registro,
        [target.name]:target.value
      })
      console.log(target.name)

    }
    const handleSubmit = (e)=>{
      e.preventDefault()
  }
 
  const postData = () =>{
      console.log('hola')
      axios.post(urlR,registro)
      .then(respuesta =>{
          console.log(respuesta.data)
          postEstadistica(respuesta.data.id)
      }).catch(error =>{
          console.log(error)
      })
  }

const postEstadistica = (param) =>{
   const registroEstadisticas = {
    "contestadas": 0,
    "correctas": 0,
    "incorrectas": 0,
    "idUser": param
}
  axios.post(urlE, registroEstadisticas)
      .then(respuesta =>{
          console.log(respuesta.data)
      }).catch(error =>{
          console.log(error)
      })
}

  return (
    <div>

<div className="registro">
      <div className="registro-container">
        <form action="/" className="form" onSubmit={handleSubmit} >
         
          <input type="text" name="correo"
           placeholder="pepito@gmail.com"  onChange={handleOnchange}></input>

          <input type="password"  name="contraseña"placeholder="*****"  onChange={handleOnchange}></input>
          <button  onClick={postData} className="btn">
          Registrate
        </button>
      
        
        </form>
      
      </div>
    </div>






    </div>
  )
}

export default Register