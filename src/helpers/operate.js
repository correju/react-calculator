const operate = (state, defaultValue) => {
  return operator[state.operator](state, defaultValue)
}

const operator = {
  "÷": (state, defaultValue) => ({
    ...defaultValue,
    value: state.value1 / state.value2
  }),
  "+": (state, defaultValue) => ({
    ...defaultValue,
    value: state.value1 + state.value2
  }),
  "-": (state, defaultValue) => ({
    ...defaultValue,
    value: state.value1 - state.value2
  }),
  "x": (state, defaultValue) => (
    {...defaultValue,
      value: state.value1 * state.value2
  })
}

export default operate