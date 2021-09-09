import React ,{useState} from 'react'

export default function Textform(props) {

  const toupper = ()=>{
    console.log("button was clicked");
    const s=text.toUpperCase();
    setText(s);
    props.alert("converted to uppercase","success");
  }

  const tolower = ()=>{
    console.log("button was clicked");
    const s=text.toLowerCase();
    setText(s);
    props.alert("converted to lowercase","success");
  }


  const handlechange = (event)=>{//used to write into textarea
    console.log("key entered");
    setText(event.target.value);
  }

  const handlecopy=()=>{//copy text to clipboard
    var s=document.getElementById("text");
    s.select();
    navigator.clipboard.writeText(s.value);
    props.alert("textcopied to clipboard","success");
  }

  const handlespaces=()=>{// used to trim spaces 
    var newtext=text.split(/[ ]+/);//using regex
    setText(newtext.join(" "));
    props.alert("extraspaces are removed","success");
  }

  const [text,setText]=useState('');
  //setText='hello';
    return (
      <>
      <div  style={{color :props.theme==="dark" ? "white":"black"}}>
        <div className="container">
            <h5 >{props.heading}</h5>
            <div className="mb-3">
            <textarea name="text" id="text" cols="100" value= {text} onChange={handlechange} rows="10"  style={{backgroundColor :props.theme==='dark' ? "#3a2856":"white",color :props.theme==="dark" ? "white":"black"}}></textarea>
            </div>
            <button type="submit" onClick={toupper} className="btn btn-primary mx-2">convert to uppercase</button>
            <button type="submit" onClick={tolower} className="btn btn-primary mx-2">convert to lowercase</button>
            <button type="submit" onClick={handlecopy} className="btn btn-primary mx-2">copy</button>
            <button type="submit" onClick={handlespaces} className="btn btn-primary mx-2">trim spaces</button>
        </div>
        <div className="container my-3">
            <h2>summery of the text :</h2>
            <p>{text.length===0 ? 0 : text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
    )
}
