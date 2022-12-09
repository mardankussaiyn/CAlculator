import React from 'react'

import './Percentage.css'

const Percentage = ({id, percentage, onSelected}) => {

  const inactive = "percentage-label";
  const active = "percentage-label percentage-label--active";
  const customPercentage = document.getElementById("custom-percentage");
  const percentages = document.getElementsByName("percentage");

  const onFocus = () => {
    for (let i = 0; i < percentages.length; i++) {
      if(percentages[i].checked && !customPercentage.checked){
        document.getElementById(`label-${i}`).className = active;
      }else{
        document.getElementById(`label-${i}`).className = inactive;
      }
    }
  }

  return (
    <>
      <label
        id={`label-${id}`}
        className="percentage-label"
        htmlFor={id}>{percentage}</label>
      <input 
        className="percentage-input"
        onFocus={onSelected}
        onChange={onFocus}
        type="radio" 
        id={id} 
        name="percentage" 
        value={percentage}
      />
    </>
  )
}

export default Percentage
