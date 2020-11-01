import './App.css';
import NewTask from './Components/NewTask';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        {/* <NewTask /> */}
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
