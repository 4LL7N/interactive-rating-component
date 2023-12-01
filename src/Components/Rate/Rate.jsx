// import Submited from '../Submited/Submited'
import './Rate.css'
import { useState } from 'react'
function Rate(props){
    const Points = [1,2,3,4,5]
    // let [number , setNumber] = useState()
    return(
        <div id="application">
            <div id="headImg">
            <img id="starImage" src='./images/icon-star.svg' alt='icon' />
            </div>
            <h1 id="head">How did we do?</h1>
            <p id="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div id="feedbackPoint">
            {Points.map((item) => {
                return <button 
                            key={item}
                            style={
                                props.number == item ? {
                                    backgroundColor : "#FC7614",
                                    color : "#FFF"
                                }:{}
                            }
                            onClick={() => {
                                props.setNumber(item)
                            }}
                            >
                            {item}
                        </button>
            })}
            </div>
            <button id="submit" onClick={() => {if(props.number)props.setSubmit(true)}} >SUBMIT</button>
        </div>
    )
}
export default Rate