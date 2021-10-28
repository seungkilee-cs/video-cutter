import './App.css';
import Home from './components/home';
import Convert from './components/convert';
import Upload from './components/upload';
import Navbar from './components/navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/upload">  <Upload/>   </Route>
          <Route path="/convert"> <Convert/>  </Route>
          <Route path="/">        <Home/>     </Route>
        </Switch>
    </Router>
  );
}

export default App;
