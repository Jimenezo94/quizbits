import React,{  Component} from 'react'
import {ButtonS, FormS, SectionF, RadioS, Titulo} from '../styles/question'
import axios from 'axios';
import Footer from './footer'
import urlP from '../helpers/url'
import Progress from './Progress'
import {urlE} from '../helpers/url'



export default class Question extends Component  {
  constructor() {
    super();
    this.state = {
        numberQuestion: 0, //estado
        question: {  //estado 1 renderiza pregunta
            question: "",
            a: "",
            b: "",
            c: "",
         
            correct: ""
        },
        score: 0, //estado 2 puntaje actualiza resp correct
        answerSelect: "", //estado 3 resp selec
        questionQuizz:[], //estado 4 array de preguntas

        RespuestasC :0,
        RespuestasIncorrect:0,
        boton : false,
        fin: true

    }
    
    this.funcion = this.funcion.bind(this);
    
}
      handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    // console.log(this.state.answerSelect)
    // console.log(this.state.question.correct)


    if (this.state.numberQuestion < this.state.questionQuizz.length) {
        this.componentDidMount()
    } else {
           this.setState({boton:true, fin:false})
        console.log(this.state.score);
        this.funcion()
    }

    if (this.state.answerSelect === this.state.question.correct) {
        this.setState({
            score: this.state.score + 1,
        })
        this.setState({
            RespuestasC: this.state.RespuestasC + 1,
        })
        
    }else{
        this.setState({
            RespuestasIncorrect: this.state.RespuestasIncorrect +1
        })
    }
   
}

onChanged = (e) => {
    this.setState({
        answerSelect: e.currentTarget.value
    })
}



  componentDidMount () {
    
       axios.get(urlP)
       .then(res => {
         const questionQuizz = res.data;

         this.setState({questionQuizz});
         const currentQuizData = this.state.questionQuizz[this.state.numberQuestion]
        
        //  console.log(currentQuizData)
        //  console.log(this.state.questionQuizz)

         
         this.setState({  //estado que actualiza y renderiza pregunts
            question: {   

                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                correct: currentQuizData.correct
            }
        })
 
         
       })

}

funcion () {
    const logedUser =    JSON.parse(localStorage.getItem("usuario"));
//  console.log(logedUser[6])
//  console.log(typeof logedUser)
    axios.get(urlE)
    .then(res => {

      const Estadisticas = res.data;
      const resultado = Estadisticas.find( datos => datos.idUser === logedUser.id)
      //console.log(resultado);

      resultado.contestadas = resultado.contestadas + 4
      resultado.correctas = resultado.correctas + this.state.RespuestasC
      resultado.incorrectas = resultado.incorrectas + this.state.RespuestasIncorrect

      console.log(resultado)
      this.postData(resultado)
    })
  
}
   postData = (parametroEstadistica) =>{
    console.log(parametroEstadistica) 
    axios.put(urlE + '/' + parametroEstadistica.id, parametroEstadistica) //recibe 2argumentos url obj a actualiza
    .then(respuesta =>{
        console.log(respuesta.data)
    }).catch(error =>{
        console.log(error)
    })
}
render() {
  return (

      <> 
      
      <Progress  pregunta={this.state.numberQuestion}/> 

    
        
          <FormS onSubmit={this.handleSubmit}>
              <SectionF className="" controlId="control-radio" style={{padding: "4rem" }}>
                  <Titulo> {this.state.question.question}</Titulo>
                <div >
                  <RadioS
                      type="radio"
                      value={this.state.question.a}
                      name={'respuestas'}
                      id={`respuesta1`}
                      onChange={this.onChanged}
                  /> 
                    <label> {this.state.question.a}</label>
  
                   </div>

                   <div>
                     
                  <RadioS

                      type="radio"
                      value={this.state.question.b}
                      name={'respuestas'}
                      id={`respuesta2`}
                      onChange={this.onChanged}
                  />
                    <label> {this.state.question.b}</label>

                  </div>


                  <div>
                  <RadioS
                      type="radio"
                      label={this.state.question.c}
                      value={this.state.question.c}
                      name={'respuestas'}
                      id={`respuesta3`}
                      onChange={this.onChanged}
                  />
                  <label> {this.state.question.c}</label>
                  </div>
              </SectionF>
              <ButtonS
              hidden={this.state.boton } 
              variant="primary" type="submit" 
              onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                  Enviar
              </ButtonS>
              <div hidden={this.state.fin}>acabaste</div>



              <h2 style={{ textAlign: "center" }}>{this.state.score}/{this.state.questionQuizz.length} </h2>
          </FormS>


      <Footer/>
      </>
  )
}
}