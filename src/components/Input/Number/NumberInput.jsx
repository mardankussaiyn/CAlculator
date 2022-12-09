import React, {useState } from 'react'
import Label from '../Label/Label';

import './NumberInput.css';

const NumberInput = ({id, src, imageAlt, label, onInputChangeHandler}) => {

  const [active, setActive] = useState("number-input");
  const onFocusHandler = (e) =>{
      setActive("number-input number-input--active");
  }
  const onLostFocusHandler = (e) => {
    if(e.target.id === "people" && (isNaN(parseInt(e.target.value)) || parseInt(e.target.value)  === 0 || e.target.value.lenght < 1)){
      setActive("number-input number-input--invalid");
    }else{
      setActive("number-input");
    }
  }

  const Show = () => id === "people" && active.includes("number-input--invalid") ? {display: "inline", color: "hsl(24, 57%, 58%)"} : {display: "none"}

  return (
    <div>
      <div className="input-labels">
        <Label id={id} label={label}/>
        <Label name={id} label="Can't be zero" style={Show()}/>
      </div>
      <div className={active}>
        <img className="number-input__image" src={src} alt={imageAlt} />
        <input 
          id={id}
          name={id}
          className="number-input__input"
          onFocus={onFocusHandler}
          onBlur={onLostFocusHandler}
          onChange={onInputChangeHandler} 
          placeholder={0}
          type="number"
        />
      </div>
    </div>
  )
}

export default NumberInput
