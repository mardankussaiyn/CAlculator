import React from 'react'

import './TotalTip.css'

const TotalTip = ({tip, total, onResetHandler}) => {

  return (
    <>
    <div>
      <div className="total">
        <div>
          <p className="total__header">Tip Amount</p>
          <p className="total__person">/ person</p>
        </div>
        <p id="total-p" className="total__total">{`$${tip}`}</p>
      </div>
      <div className="total">
        <div>
          <p className="total__header">Total</p>
          <p className="total__person">/ person</p>
        </div>
        <p id="total-t" className="total__total">{`$${total}`}</p>
      </div>
    </div>
    <div>
      <div className="total">
        <button onClick={onResetHandler} className="total__button" type="reset">RESET</button>
      </div>
    </div>
    </>
  )
}

export default TotalTip
