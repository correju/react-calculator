import Calculator from './components/Calculator'
import {Provider} from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
