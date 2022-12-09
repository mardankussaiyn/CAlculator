import React from 'react'

import Label from '../Label/Label'
import CustomPercentage from './Percentage/CustomPercentage'
import Percentage from './Percentage/Percentage'

import './PercentageSelector.css'

const PercentageSelector = ({label, onClickHandler, customPercentageValue}) => {

  return (
    <div className="percentage-selector">
      <Label
        label={label}
      />
      <div className="percentages">
        <Percentage
          id="0"
          percentage="5%"
          onSelected={onClickHandler}
        />
        <Percentage
          id="1"
          percentage="10%"
          onSelected={onClickHandler}
        />
        <Percentage
          id="2"
          percentage="15%"
          onSelected={onClickHandler}
        />
        <Percentage
          id="3" 
          percentage="25%"
          onSelected={onClickHandler}
        />
        <Percentage
          id="4"
          percentage="50%"
          onSelected={onClickHandler}
        />
        <CustomPercentage
          customValue={customPercentageValue}
          onSelected={onClickHandler}
        />
      </div>
    </div>
  )
}

export default PercentageSelector
