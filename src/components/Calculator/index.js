import Panel from '../Panel'
import './index.css'
import {connect} from 'react-redux'
import calculateAction from '../../redux/actions/calculateAction'
import './index.css'

const mapStateToProps = state => state.calculate

const Calculator = ({value, dispatch}) => {
  const clickHandler = (buttonName) => {
    dispatch(calculateAction(buttonName))
  }

  return <div className="container">
    <div className="display">{value.toString() === "Infinity" ?  "Err" : value}</div>
    <Panel clickHandler={clickHandler} />
  </div>
}

export default  connect(mapStateToProps)(Calculator)
