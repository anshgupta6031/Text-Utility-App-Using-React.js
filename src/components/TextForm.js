



import React, {useState} from 'react'                       //  useState is a hooke........

export default function TextForm(props) {

    const[text, setText] = useState("")               //  "" is the default value of text variable(state) which can only be changed by the 'setText' function....
    

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked...")

        let newText = text.toUpperCase()
        
        // text = "new text"                                            //  wrong way to change the state........
        setText(newText)                //  correct way to change the state.....
    }
    

    const handleOnChange = (event)=>{
        console.log("On change")

        setText(event.target.value)                     //  updates the text after every change.....
    }

    
    return (
        <div>
            <div className="mb-3 my-4">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="myBox" rows="9" placeholder='Enter text here...' value={text} onChange={handleOnChange}></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}

