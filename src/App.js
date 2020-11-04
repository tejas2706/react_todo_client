import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewTask from './Components/NewTask';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
      <Router basename="/">
          <Route exact path="/"><Login /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/home"><Home /></Route>
      </Router>
  );
}

export default App;
