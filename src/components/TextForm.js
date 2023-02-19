import React, { useState } from 'react'
import secret from '../f';
// import showAlert from '../App'
var ranc = secret
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase Was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")

    }
    const handleDownClick = () => {
        // console.log("UpperCase Was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")

    }

    const handleHash = () => {
        let length = text.length;
        let nulstr = ""
        for (let i = 0; i < length; i++) {
            let ts = String.fromCharCode(text.charCodeAt(i) + i + ranc);
            nulstr += ts;
        }
        setText(nulstr)
        props.showAlert("Converted to Hash", "success")

    }
    const handleDeHash = () => {
        let length = text.length;
        let nulstr = ""

        for (let i = 0; i < length; i++) {
            let ts = String.fromCharCode(text.charCodeAt(i) - i - ranc);
            nulstr += ts;
        }
        setText(nulstr)
        props.showAlert("Dehashed Successfully", "success")

    }
    const handleClear = () => {
        setText("")
        props.showAlert("Cleared the Area", "warning")

    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Your Text Here");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? "black" : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3" >
                    {/* <label for="myBox" className="form-label">Password</label> */}
                    {/* <input type="password" className="form-control" id="myBox" /> */}
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="10" style={{ backgroundColor: props.mode === 'light' ? "#b5bcff" : '#090924', color: props.mode === 'light' ? "black" : 'white', borderRadius: "16px", border: `0px solid ${props.mode === 'light' ? "black" : "white"}` }}></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary">Convert To UpperCase</button>
                <button onClick={handleDownClick} className="btn btn-success mx-3">Convert To LowerCase</button>
                <button onClick={handleHash} className="btn btn-info ">Hash It</button>
                <button onClick={handleDeHash} className="btn btn-danger mx-3">De-Hash It</button>
                <button onClick={handleClear} className="btn btn-warning ">Clear It</button>
            </div>
            <div className="container my-5" style={{ color: props.mode === 'light' ? "black" : 'white' }} >
                <h2>Your Text Summary</h2>
                <p>{text.length === 0 ? 0 : text.trim().split(" ").length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{text.length === 0 ? 0 : text.trim().split(" ").length * 0.008} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter The Text"}</p>
            </div>
        </>
    )
}
