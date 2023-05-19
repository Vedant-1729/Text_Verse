import { useState } from "react"
import React from 'react'
import '../App.css'

export default function Textarea(props) {

    const[text,setText] = useState("Enter your text to perform the action") // text value is assigned using use state

   const Uppercase = () =>{
        console.log("btn is clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const Lowercase = () =>{
        console.log("btn is clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const Clear = () =>{
        console.log("btn is clicked")
        let newText = ``
        setText(newText)
    }
    

    const handleChange = (event) =>{
        console.log(event)
        setText(event.target.value)
    }


    return (
        <>
        <div className='container my-3'>
        <h2 className = {`text-${props.text}}`}>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleChange}id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div>
            <button className="btn btn-primary" onClick={Uppercase}>Change to Uppercase</button> &nbsp;
            <button className="btn btn-secondary" onClick={Lowercase}>Change to Lowercase</button> &nbsp;
            <button className="btn btn-success" onClick={Clear}>Clear Text</button> &nbsp;
            </div>
            </div>

            <div className="container my-3">
                <h2> Text Statistics</h2>
                <p> Word Length = {text.split(' ').filter((element)=>{return element.length!==0}).length} and No. of Character = {text.length}</p>
            </div>
        </>
    )
}
