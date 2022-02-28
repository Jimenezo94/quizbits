import axios from 'axios';
import React,{ useState, useEffect} from 'react'
import { urlE } from '../helpers/url';
import Footer from './footer'

function Estadisticas() {

  const [lista, setLista] = useState({});
 
  useEffect(() => {
    //const timer = setInterval(() => {
    //}, 499);

    const logedUser =  JSON.parse(localStorage.getItem("usuario"));
    //  console.log(logedUser[6])
    //  console.log(typeof logedUser)
        axios.get(urlE)
        .then(res => {
    
          const Estadisticas = res.data;
          console.log(Estadisticas);
          const resultado = Estadisticas.find( datos => datos.idUser === logedUser.id)
    
          console.log(resultado)
      setLista(resultado);
        })
      
  }, []);
 



  return (
    <div>
      <h3>Estadisticas</h3>

      <p>Contestadas {lista.contestadas}</p>
      <p>Correctas {lista.correctas}</p>
      <p>incorrectas {lista.incorrectas}</p>



    <Footer/>
    </div>
  )
}

export default Estadisticas