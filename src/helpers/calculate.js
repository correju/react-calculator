import Calculator from "../components/Calculator";
import operate from './operate'
const getcurrentValue = (first) => first ? 'value1' : 'value2'

const calculate = ({state={}, buttonName, defaultValue}) => {
  const value = Number(buttonName)
  const currentValue = getcurrentValue(state.first)
  if (Number.isInteger(value)) {
      const number = state[currentValue] === 0 ? value : Number(`${state[currentValue]}${buttonName}`)
      state = {
          ...state,
          [currentValue]: number,
          value: number}
  } else {
      state = operator[buttonName](buttonName, state, defaultValue)
  }
  return state
}

const operator = {
  "÷": (val, state) => {
    return {...state, first: false, operator: "÷"}
  },
  "+": (val, state) => {
    return {...state, first: false, operator: "+"}
  },
  "-": (val, state) => {
    return {...state, first: false, operator: "-"}
  },
  "x": (val, state) => {
    return {...state, first: false, operator: "x"}
  },
  "+/-": (val, state) => {
    const currentValue = getcurrentValue(state.first)
    return {
      ...state,
      [currentValue]: (state[currentValue]*-1),
      value: (state[currentValue]*-1)
    }
  },
  "=": (val, state, defaultValue) => {
    return operate(state, defaultValue)
  },
  ".": (val, state) => {
    return state
  },
  "AC": (val, state, defaultValue) => {
    return {...defaultValue}
  }
}

export default calculate
