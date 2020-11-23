import Calculator from "../components/Calculator";
import defaultValue from './default'
import operate from './operate'
const getcurrentValue = (first) => first ? 'value1' : 'value2'
const validActions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "÷",
  "+",
  "-",
  "x",
  "+/-",
  "=",
  ".",
  "AC"
];

const calculate = (state, action) => {
  const newState = validActions.includes(action.type) ?
    {
      ...state,
      calc: operator[action.type](state.calc, action.type)
    } : state
    return newState
}

const isNumber = (calc, type) => {
  const value = Number(type)
  const currentValue = getcurrentValue(calc.first)
  const number = calc[currentValue] === 0 ?
  value : Number(`${calc[currentValue]}${type}`)
  return calc = {
    ...calc,
    [currentValue]: number,
    value: number
  }
}

const operator = {
  "1": (calc, type) => isNumber(calc, type),
  "2": (calc, type) => isNumber(calc, type),
  "3": (calc, type) => isNumber(calc, type),
  "4": (calc, type) => isNumber(calc, type),
  "5": (calc, type) => isNumber(calc, type),
  "6": (calc, type) => isNumber(calc, type),
  "7": (calc, type) => isNumber(calc, type),
  "8": (calc, type) => isNumber(calc, type),
  "9": (calc, type) => isNumber(calc, type),
  "0": (calc, type) => isNumber(calc, type),
  "÷": (calc, type) => ({...calc, first: false, operator: type}),
  "+": (calc, type) => ({...calc, first: false, operator: type}),
  "-": (calc, type) => ({...calc, first: false, operator: type}),
  "x": (calc, type) => ({...calc, first: false, operator: type}),
  "+/-": (calc, action) => {
    const currentValue = getcurrentValue(calc.first)
    return {
      ...calc,
      [currentValue]: (calc[currentValue]*-1),
      value: (calc[currentValue]*-1)
    }
  },
  "=": (calc) => operate(calc, defaultValue),
  ".": (calc) => calc,
  "AC": (calc) => ({...defaultValue})
}

export default calculate
