import React, { useState } from 'react'

import './CustomPercentage.css'

const CustomPercentage = ({onSelected}) => {

  const [active, setActive] = useState("custom-percentage-input");

  const onFocusHandler = (e) =>{
    e.target.checked = true;
    setActive("custom-percentage-input custom-percentage--active");
    const percentages = document.getElementsByName("percentage");
    for (let i = 0; i < percentages.length; i++) {
      percentages[i].checked = false;
      document.getElementById(`label-${i}`).className = "percentage-label";
    }
  }

  const onLostFocusHandler = (e) => {
    if(isNaN(parseFloat(e.target.value))){
      e.target.checked = false;
    }
    setActive("custom-percentage-input");
  }

  return (
    <>
      <input
        id="custom-percentage"
        name="custom_percentage"
        className={active}
        onFocus={onFocusHandler}
        onBlur={onLostFocusHandler} 
        onChange={onSelected}
        type="number"
        placeholder="Custom"
      />
    </>
  )
}

export default CustomPercentage
