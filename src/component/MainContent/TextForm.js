import React from "react";
import { useState } from "react"



function TextForm(props) {


    const Uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const Lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const ClearText = () => {
        setText("")
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('Enter text here');


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : 'black' }}  >
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3 " >

                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? "white" : 'grey', color: props.mode === 'dark' ? "white" : 'black' }} id="myBox" rows="8" ></textarea>

                </div>
                <button className="btn btn-primary m-2" onClick={Uppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={Lowercase}>To Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary m-2" onClick={ClearText}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : 'black' }} >
                <h1>Your Text Summary</h1>
                <p>  words={text.split(" ").length} charecters ={text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}

export default TextForm