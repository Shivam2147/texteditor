import React,{useState} from 'react'

export default function Formtext(props) {

  const onhandle = (event)=>{
   settext(event.target.value)
    console.log("hyy");
  }
  const [text, settext] = useState('enter your text');
  const onhandleUp = ()=>{
    let newText = text.toUpperCase();
    settext(newText)
  }
  const onhandlelo = ()=>{
    let lower = text.toLowerCase();
    settext(lower);
  }
  return (
    <>
      <div className="container">
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={onhandle} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <div className="d-flex gap-2">
    <button className='btn btn-primary' onClick={onhandleUp}>UPPER CASE</button>
    <button className='btn btn-primary'onClick={onhandlelo}>LOWER CASE</button>
    </div>
    </div>
       </div>
    </>
  );
}
