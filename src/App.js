import Calculator from './components/Calculator'
import {createStore} from 'redux'
import calculate from './helpers/calculate'

// const store = createStore((state= {}) => state, defaultValue)

function App() {
  return (
    <Calculator />
  );
}

export default App;
