import logo from './logo.svg';
import NavBar from './Components/NavBar';
import LandingPage from "./Components/LandingPage"
import Section1 from './Components/Sections/Section1';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import NavAppBar from './Components/AppBar';


function App() {

  return (
    <Router>

        <div className="App">
          <NavAppBar/>
          <LandingPage />
          <Section1 />
        </div>

    </Router>
  );
}

export default App;
