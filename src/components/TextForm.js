import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("uppercase is click"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase!","success");
    }
    const handleAlterNative = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          if (i % 2 === 0) {
            newText += text[i].toUpperCase();
          } else {
            newText += text[i].toLowerCase();
          }
        }
        setText(newText);
        props.showAlert("Converted AlterNative!","success");
      };
    const handleLowerClick = ()=>{
        // console.log("uppercase is click"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase!","success");
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyToKeyboard=()=>{
        navigator.clipboard.writeText(text)
        .then(()=>{
            console.log("text is copied:");
        }).catch((error)=>{
            console.log("tex is not copied");
        })
        props.showAlert("Text is Copied!","success");
    }

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'textfile.txt');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        props.showAlert("Text is downloaded!","success");
      }

      const handleTextareaFocus = (event) => {
        if (firstClick) {
            setText(''); // Selects the text on first click
          setFirstClick(false);
        }
      };

    
    const [text, setText] = useState('Enter text here');
    const [firstClick, setFirstClick] = useState(true);
    // text="sflfkjs" wrong way to change value
    // setText("Enter the text here");
  return (
    <>
     <div className='container'  style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" 
                value={text} id="myBox" rows="8"  onChange={handleOnChange} onFocus={handleTextareaFocus} 
                style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}  >Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleAlterNative}  >Convert To Alternative</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyToKeyboard}  >Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleDownload}>Download</button>
   </div>
   <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery </h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes take to read.</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter The Text For Preview"}</p>
   </div>
    </>
   

  )
}
