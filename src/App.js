import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewTask from './Components/NewTask';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Route exact path="/"><Login /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/home"><Home /></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
