import React, { useState } from 'react'
import NumberInput from '../Input/Number/NumberInput'
import PercentageSelector from '../Input/PercentageSelector/PercentageSelector';
import TotalTip from '../Output/TotalTip';


import './Splitter.css'

const Splitter = () => {

  const [values, setValues] = useState({
    bill: 0,
    people: 0,
    percentage: 0,
    custom_percentage: 0
  });

  const {bill, people, percentage, custom_percentage} = values;

  const onInputChangeHandler = (e) =>{
    let val = parseFloat(e.target.value);
    if(e.target.name === "people"){
      setValues({
        ...values,
        [e.target.name]: parseInt(val)
      });
      e.target.value = parseInt(val);
    }else{
      if(!e.target.id === "custom-percentage"){
        setValues({
          ...values,
          [e.target.name]: val
        });
      }else{
        setValues({
          ...values,
          percentage: e.target.id === "custom-percentage" ? NaN : percentage,
          [e.target.name]: val
        });
      }
      e.target.value = val;
    }
  };
  
  const onResetHandler = () =>{
    //Reseting totals
    document.getElementById("total-p").innerText = "$0.00";
    document.getElementById("total-t").innerText = "$0.00";
    //Reseting values
    setValues({
      bill: 0,
      people: 0,
      percentage: 0,
      custom_percentage: 0
    })
    //Reseting percentages
    const percentages = document.getElementsByName("percentage");
    for (let i = 0; i < percentages.length; i++) {
      const element = percentages[i];
      element.checked = false;
      document.getElementById(`label-${i}`).className = "percentage-label";
    }
    //Reseting custom percentage
    const customPercentage = document.getElementById("custom-percentage");
    customPercentage.checked = false;
  }

  const calcTipPerPerson = () => {
    if(isNaN(bill) || isNaN(people) || !isFinite(bill / people) || bill / people === 0 || (isNaN(custom_percentage) && isNaN(percentage)) ){
      return 0.00.toFixed(2);
    }
    if(!document.getElementById("custom-percentage").checked){
      return ((bill * percentage) / 100 / people).toFixed(2);
    }
    else{
      return ((bill * custom_percentage) / 100 / people).toFixed(2);
    }
  };
  
  const calcTotalPerPerson = () => {
    if(isNaN(bill) || isNaN(people) || !isFinite(bill / people) || bill / people === 0 || (isNaN(custom_percentage) && isNaN(percentage))){
      return 0.00.toFixed(2);
    }
    return ((bill / people) + parseFloat(calcTipPerPerson())).toFixed(2);
  };
  

  return (
    <div className="splitter">
      <form id="form" className="form">
        <div className="inputs">
          <NumberInput 
            id="bill" 
            src="./src/images/icon-dollar.svg" 
            imageAlt="bill" 
            label="Bill"
            onInputChangeHandler={onInputChangeHandler}
            value={bill}
          />

          <PercentageSelector
            label="Select Tip %"
            onClickHandler={onInputChangeHandler}
            customPercentageValue={custom_percentage}
          />

          <NumberInput 
            id="people" 
            src="./src/images/icon-person.svg" 
            imageAlt="people" 
            label="Number of People"
            onInputChangeHandler={onInputChangeHandler}
            value={people}
          />
        </div>
        <div className="total-tip">
          <TotalTip 
          onResetHandler={onResetHandler}
            tip={calcTipPerPerson()}
            total={calcTotalPerPerson()}
          />
        </div>
      </form>
    </div>
  )
}

export default Splitter
