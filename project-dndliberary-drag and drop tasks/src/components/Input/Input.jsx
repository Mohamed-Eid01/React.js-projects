import React from 'react'
import "./Input.css"
export const Input = ({ onSumbit }) => {
    const[input,setInput]=React.useState("")
    const handleSubmit= ()=>{
        if(!input) return;
        onSumbit(input)
        setInput("")
    }
  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='button' onClick={handleSubmit}>Add</button>
    </div>
  );
};

