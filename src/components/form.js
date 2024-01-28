import React from 'react';


export default function form(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
    </div>
  );
}
