import Calculator from './components/Calculator'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import calculate from './helpers/calculate'
import defaultValue from './helpers/default'

const store = createStore(calculate, {calc: defaultValue})

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
