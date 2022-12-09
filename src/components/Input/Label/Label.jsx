import React from 'react'

import './Label.css'

const Label = ({id, label, name, style}) => {
  return (
    <div className="label-component">
      <label style={style} htmlFor={id} name={name} className="label-component__label">{label}</label>
    </div>
  )
}

export default Label
