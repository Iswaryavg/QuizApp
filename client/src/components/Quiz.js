import React from 'react'
import {questions} from "./data"
import 'antd/dist/antd.css';
import {Button,Input,Progress,Divider} from "antd"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"

function Quiz() {
       
 

    return (
        <div  style={{ padding: '1rem', border: '1px solid grey', borderRadius: '4px', maxWidth: 400, margin: '3rem auto' }}>
          <h1>Quiz to test your Grammar </h1>
          <h2></h2>
          <Progress percent={30} status="active"/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>LEVEL 1</h2>
                            <h2>Quiz</h2>
                        </div>
                        <span style={{ marginBottom: 0, color: 'grey' }}>Infinitive</span>
                        <h2>Vocabulary</h2>
                        <div style={{ fontSize: '1rem' }}>
                            Answer the vocabulary <span style={{ color: 'red' }}>
                              random tense
                            </span>
                        </div>
                        <form style={{ padding: '1rem 0' }} >
                            <div style={{ display: 'flex' }}>
                                <Input
                                    name="value"
                                  
                                    type="text"
                                />

                                <Button
                                    className
                                    type="submit"
                                  
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
          {/* Timer */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button>5</Button>
                            <Button>4</Button>
                            <Button>3</Button>
                            <Button>2</Button>
                            <Button>1</Button>
                            <Button
                                                           >
                                Click to Restart!
                            </Button>
                        </div>
{/* 
Results */}
<React.Fragment>
                                <Divider />
                                <h3>Wrong! Correct answer: </h3>
                                <div>
                                    <li style={{ display: 'block' }}>
                                        <p>Wrong answer 
                                         
                                        </p>
                                    </li>

                                    <audio id="audio" controls style={{ display: 'none' }}>
                                        <source id="audioSource"></source>
                                        Your browser does not support the audio format.
                                    </audio>

                                </div></React.Fragment>
                                <>
                        <h1>Reviews the wrong answers</h1>
                       
                            <div>
                                <ul>
                                    <li>
                                        answer
                                    </li>

                                </ul>
                            </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button>Retry</Button>
                            {/* <Button><Link to="/test2" >Level2</Link></Button> */}
                            <Button>Level2</Button>
                        </div>
                    </>
        </div>
    )
}

export default Quiz
