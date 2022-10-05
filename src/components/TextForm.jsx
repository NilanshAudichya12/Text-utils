import React, {useState} from 'react'

export default function TextForm(props) {

    
    const[text, setText] = useState("");

    const onClickUpHandler= ()=>{
        const newText= text.toUpperCase();
        setText(newText);
    }
    const onClickLoHandler= ()=>{
        const newText= text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            

            <div className="container mb-3 my-3" style={{color:props.mode==='light'?'black':'white'}} >
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={onClickUpHandler}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={onClickLoHandler}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>Number of characters- {text.length}</p>
            <p>Number of words- {text.split(" ").length}</p>
            <p>Time taken to read- {0.008*text.split(" ").length} minutes</p>
        </div>

        </>)
}
