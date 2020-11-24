const operate = (value1, value2, operator) => operations[operator](value1, value2)

const operations = {
  "÷": (value1, value2) => value1 / value2,
  "+": (value1, value2) => value1 + value2,
  "-": (value1, value2) => value1 - value2,
  "x": (value1, value2) => value1 * value2
}

export default operate