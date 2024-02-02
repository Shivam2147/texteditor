import React,{useState} from 'react'
export default function Formtext(props) {

  const onhandle = (event)=>{
   settext(event.target.value)
  }
  const [text, settext] = useState('enter your text');
  const onhandleUp = ()=>{
    let newText = text.toUpperCase();
    settext(newText)
    props.showAlert('Converted to Uppper case','success');
  }
  const onhandlelo = ()=>{
    let lower = text.toLowerCase();
    settext(lower);
    props.showAlert('Converted to lower case','success');
  }
  const onhandclear = ()=>{
    let clear = '';
    settext(clear);
    props.showAlert('Text cleared','success');
  }
  const onhandclearspace =()=>{
    let newText = text.split(/ [ ]+/);
    settext(newText.join(' '))
    props.showAlert('Extra sapecs is removed','success');
  }
  const onhandclopy =()=>{
    var text = document.getElementById('exampleFormControlTextarea1');
    // text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copy to clipboard','success');
  }
  return (
    <>
      <div className='container'>
    <div>
        <h1>{props.heading}</h1>
    <div className='mb-3'>
    <textarea className='form-control' value={text} onChange={onhandle} id='exampleFormControlTextarea1' rows='8'></textarea>
    </div>
    <div className='d-flex gap-2'>
    <button className='btn btn-primary' onClick={onhandleUp}>UPPER CASE</button>
    <button className='btn btn-primary'onClick={onhandlelo}>LOWER CASE</button>
    <button className='btn btn-primary'onClick={onhandclear}>CLEAR</button>
    <button className='btn btn-primary'onClick={onhandclopy}>COPY TEXT</button>
    <button className='btn btn-primary'onClick={onhandclearspace}>Remove Extra Space</button>
    </div>
    </div>
       </div>
       <div className='container my-2'>
        <h1>Your summary is </h1>
        <p>Total words is {text.split(/\s+/).filter(word => word !== '').length} and total characters is {text.length}</p>
       </div>
    </>
  );
}
