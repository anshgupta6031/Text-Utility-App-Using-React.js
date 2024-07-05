



import React, { useState } from 'react'                       //  useState is a hooke, which helps in creating a state variable....

export default function TextForm(props) {

    const [text, setText] = useState("")               //  "" is the default value of text variable(state) which can only be changed by the 'setText' function....


    const handleUpClick = () => {
        console.log("UpperCase was clicked...")

        let newText = text.toUpperCase()

        // text = "new text"                                            //  wrong way to change the state........
        setText(newText)                //  correct way to change the state.....
    }


    const handleOnChange = (event) => {
        console.log("On change")

        setText(event.target.value)                     //  updates the text after every change.....
    }


    const handleLoClick = () => {
        console.log("LowerCase was clicked...")

        let newText = text.toLowerCase()
        setText(newText)
    }


    const clearText = () => {
        console.log("Clear Text was clicked...")
        setText("")
    }


    const copyText = () => {
        console.log("Copy Text was clicked...")
        document.getElementById("myBox").select()                      //  to select the copied part........
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <div className="container">
                <div className="mb-3 my-4">
                    <h3><u>{props.heading}</u></h3>
                    <textarea className="form-control my-3" id="myBox" rows="9" placeholder='Enter text here...' value={text} onChange={handleOnChange}></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            </div>


            <div className="container my-5">
                <h3><u>Your text Details</u></h3>

                <p>Number of words : {text.split(" ").length}</p>
                <p>Number of characters : {text.length}</p>
            </div>
        </>
    )
}

