import React from 'react'
import {questions} from "./data"
import 'antd/dist/antd.css';
import {Button,Input,Progress,Divider} from "antd"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"


function Quiz() {
       
    const [validation,setvalidation]=useState({value: "",timeOut: false,round: 0,timer: 10, randomTense: "",wrongAnswer: "",wrongAnswers: []})    


    useEffect(() => {
        function startTimeOut()  {
             const timeout=  setTimeout(() => {
                setvalidation(prevvalue => {               
                    return ({...prevvalue,timeOut:true});
      
                  });  
            }, 10000)
     
           const interval=  setInterval(() => {
                setvalidation(prevvalue => {   
                   let res  =prevvalue.timer-1      
                   if (res === 0) {
                    clearInterval(interval)
                }    
                    return ({...prevvalue,timer:res});
       
                  });  
                 
            }, 1000)
            return function cleanup() {
            
                clearTimeout(timeout)
                clearInterval(interval)
                }
            
        }
        function randomTense() {
            let TenseArray = ['simple', 'past']
            //We need to get one tense between simple and past randomly 
            let res =  TenseArray[Math.floor(Math.random() * TenseArray.length)]
    
         
            setvalidation(prevvalue => {               
                return ({...prevvalue,randomTense:res});
    
              });         
      
        } 
   
        randomTense()
        startTimeOut()
    
       
      },[]);

    console.log(validation.randomTense)


   
   function handleRedirect()  {
   
        setTimeout(() => {
            window.location.reload();
        }, 10);

    }
   function handleRestart() {
        //1. set state  timer : 0

        setvalidation(prevvalue => {               
            return ({...prevvalue, timer: 10, timeOut: false, wrongAnswer: ""});

          });         
       
        //2. trigger startTimeOut again 

    }
    function handleChange(value)  {
        setvalidation(prevvalue => {  
                     
            return ({...prevvalue,value:value});
       
               });         

    }
   function handleSubmit(event) {
        event.preventDefault();

        if (validation.timeOut) return alert("Please click restart button to keep doing it");

        if (validation.value.trim()=="") return alert("Please Type something first!")

        setvalidation(prevvalue=>{ return ({...prevvalue, value: "", wrongAnswer: "" }) })
        checkMatched()
    }
     function checkMatched()
    {
(validation.randomTense === 'simple' ? questions[validation.round].simple : questions[validation.round].past)===validation.value?
setvalidation(prevvalue => {        

    const res=validation.round+1      

    return ({...prevvalue, timer: 10,round:res,wrongAnswer:""});

  })       
  
:

setvalidation(prevvalue=>{return ({...prevvalue,wrongAnswer: validation.randomTense === 'simple' ? `${questions[validation.round].simple}`
: `${questions[validation.round].past}`})

}, () => {
setvalidation(prevvalue=>{ const res=validation.round+1      
        return ({...prevvalue, round: res, timer: 10,wrongAnswers: validation.wrongAnswers.concat(questions[validation.round].vocabulary)})
       
    })
   
  console.log(validation.round)
})


    }
   
    return (
        <div  style={{ padding: '1rem', border: '1px solid grey', borderRadius: '4px', maxWidth: 400, margin: '3rem auto' }}>
 {validation.round < questions.length ?
          <>
          <h1>Quiz to test your Grammar </h1>

       {/* <p>{questions.map(data=>
<h1 key={data.id}>{data.vocabulary}</h1>
       )}</p>  */}
       
           <Button type="submit" onClick={handleRestart}>Click   </Button>                         
                                                                                                  
                        {/* <Progress percent={30} status="active"/> */}
                        <Progress percent={validation.round / questions.length * 100} status="active" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>LEVEL 1</h2>
                          
                            <h2>{validation.round}/{questions.length}</h2>
                        </div>
                        <span style={{ marginBottom: 0, color: 'grey' }}>Infinitive</span>
                        <h2>Vocabulary</h2>
                        <h2>{questions[validation.round].vocabulary}</h2>
                  
                        <div style={{ fontSize: '1rem' }}>
                            Answer the vocabulary <span style={{ color: 'red' }}>
                                {validation.randomTense === 'simple' ? 'simple past' : 'past participle'}
                            </span>
                        </div>
                        <form style={{ padding: '1rem 0' }} onSubmit={handleSubmit} >
                            <div style={{ display: 'flex' }}>
                                <Input
                                    type="text"
                                    name="value"
                                    value={validation.value}
                                    id="voca"
                                    onChange={({ target: { value } }) => handleChange(value)}
                                />

                                <Button
                                    className
                                    type="submit"
                                  onClick={handleSubmit} >
                                    Submit
                                </Button>
                            </div>
                        </form>
          {/* Timer */}
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         {console.log(validation.timer)}
{/* 
          <Button className={`${validation.timer <= 8 && 'disabled'}`}>5</Button> */}
          <Button  disabled={validation.timer<=8?"true":""} >5</Button>
                     <Button  disabled={validation.timer<=6?"true":""}>4</Button>
                     <Button  disabled={validation.timer<=4?"true":""}>3</Button>
                     <Button  disabled={validation.timer<=2?"true":""}>2</Button>
                     <Button  disabled={validation.timer<=0?"true":""}>1</Button>
                            <Button onClick={handleRestart}
                            style={{ display: validation.timeOut ? 'block' : 'none' }}>
              
                                Click to Restart!</Button>
                        </div>
{/* 
Results */}
{validation.wrongAnswer&&(<React.Fragment>
                                <Divider />
                                <h3>Wrong! Correct answer: </h3>
                                <div>
                                    <li style={{ display: 'block' }}>
                                        <p>
                                         {validation.wrongAnswer}
                                        </p>
                                    </li>

                                  
                                </div>
                                </React.Fragment>
                                )}
                                </>:
                                <>
                                <h1>Reviews the wrong answers</h1>
                        {validation.wrongAnswers.map((answer, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {validation.wrongAnswers}
                                    </li>

                                </ul>
                            </div>
                        ))}
                        
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button onClick={handleRedirect} >Retry</Button>
                            {/* <Button><Link to="/test2" >Level2</Link></Button> */}
                            <Button>Level2</Button>
                        </div>
                

        </>
          }
          </div>
    )
        }
export default Quiz
