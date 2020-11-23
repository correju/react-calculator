import Panel from '../Panel'
import Button from '../Panel'
import './index.css'
import React, { useState } from "react"
import {connect} from 'react-redux'
import calculate from '../../helpers/calculate'
import defaultValue from '../../helpers/default'
import './index.css'

const mapStateToProps = state => state.calc

const Calculator = ({value, dispatch}) => {
  const clickHandler = (buttonName) => {
    dispatch({type: buttonName})
  }
  return <div className="container">
    <div className="display">{value}</div>
    <Panel clickHandler={clickHandler} />
  </div>
}

export default  connect(mapStateToProps)(Calculator)
