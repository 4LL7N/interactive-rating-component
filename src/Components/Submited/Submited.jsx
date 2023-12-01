import "./Submited.css"

function Submited(props){
    return(
        <div id="sub-application">
            <img id="sub-Image" src='./images/illustration-thank-you.svg' />
            <div id="sub-selected" >You selected {props.number} out of 5</div>
            <h1 id="sub-head">Thank you!</h1>
            <p id="sub-description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}

export default Submited