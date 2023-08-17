import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log('Uppercase was clicked');
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = ()=> {
        // console.log('Uppercase was clicked');
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");

    }

    const handleClear = ()=> {
        // console.log('Uppercase was clicked');
        let newText="";
        setText(newText)
        props.showAlert("Cleared text!","success");

    }

    const handleCopy = ()=>{
        console.log("I am copied");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");

    }

    const handleReverse = ()=> {
        // console.log('Uppercase was clicked');
        let newText=text;
        setText(revstr(newText))
        props.showAlert("Text reversed!","success");

    }

    const revstr = (str)=>{
        let newStr = str.split(" ").reverse().join(" ");
        return newStr

    }

    const handleOnChange = (event)=> {
        // console.log(text.split(" "));
        setText(event.target.value)
    }


    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    const [text, setText] = useState("enter text here");

    const check_space = (arr)=>{
        return arr !==''
    }

  return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#0d173b'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#0d173b'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear} >Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleReverse} >Reverse Sentence</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy} >Copy</button>

        </div>  

        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#0d173b'}}>
            <h2>Text Summary</h2>
            <p>Your text has {text.split(" ").filter(check_space).length} words and {text.length} characters</p> 
            <p>{Math.round(0.008*text.split(" ").filter(check_space).length)} minutes {Math.round(0.008*text.split(" ").filter(check_space).length*60%60)} seconds read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview here"}</p>
        </div>
    </>
    )
}
