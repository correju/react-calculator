import defaultValue from '../../helpers/defaultValue'
import operate from '../../helpers/operate'
const getcurrentValue = (first) => first ? 'value1' : 'value2'

const calculate = (state=defaultValue, action) => {
  const validActions = Object.keys(operator)
  const newState = validActions.includes(action.type) ?
    {
      ...state,
      ...operator[action.type](state, action.type)
    } : state
    console.log(newState)
    return newState
}

const isNumber = (state, type) => {
  const value = Number(type)
  const currentValue = getcurrentValue(state.first)
  const number = state[currentValue] === 0 ?
  value : Number(`${state[currentValue]}${type}`)
  return {

    [currentValue]: number,
    value: number
  }
}

const operator = {
  "1": (state, type) => isNumber(state, type),
  "2": (state, type) => isNumber(state, type),
  "3": (state, type) => isNumber(state, type),
  "4": (state, type) => isNumber(state, type),
  "5": (state, type) => isNumber(state, type),
  "6": (state, type) => isNumber(state, type),
  "7": (state, type) => isNumber(state, type),
  "8": (state, type) => isNumber(state, type),
  "9": (state, type) => isNumber(state, type),
  "0": (state, type) => isNumber(state, type),
  "÷": (state, type) => ({first: false, operator: type}),
  "+": (state, type) => ({first: false, operator: type}),
  "-": (state, type) => ({first: false, operator: type}),
  "x": (state, type) => ({first: false, operator: type}),
  "+/-": (state, action) => {
    const currentValue = getcurrentValue(state.first)
    return {
      [currentValue]: (state[currentValue]*-1),
      value: (state[currentValue]*-1)
    }
  },
  "=": (state) => {
    const result = operate(state.value1, state.value2, state.operator)
    return {
      ...defaultValue,
      value1: result,
      value: result
    }
  },
  ".": (state) => state,
  "AC": (state) => ({...defaultValue})
}

export default calculate
