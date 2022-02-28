import React,{useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


const Progress = (props) => { 
  console.log(props.pregunta)

    const [countOfProgess, setCountOfProgess] = useState(0);
 
    useEffect(() => {
      //const timer = setInterval(() => {
        setCountOfProgess(props.pregunta+1);
      //}, 499);
   
      return () => {
        clearInterval(99);
      };
    }, );
   

  return (
    <div>

<div style={{ display: 'block', margin: 'auto',
               color:'white',   width: 700, padding: 30 }}>
          {parseInt(props.pregunta)} /4
      <ProgressBar now={props.pregunta*25} />
    </div>



    </div>
  )
}

export default Progress