import Panel from '../Panel'
import Button from '../Panel'
import './index.css'
import React, { useState } from "react"
import calculate from '../../helpers/calculate'
import defaultValue from '../../helpers/default'
import './index.css'

export default  (props) => {
  const [calc, setCalc] = useState(defaultValue);
  // console.log(calc.value)
  const clickHandler = (buttonName) => {
    setCalc(calculate({state: calc, buttonName, defaultValue}))
  }
  return <div className="container">
    <div className="display">{calc.value}</div>
    <Panel clickHandler={clickHandler} />
  </div>
}