import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/"  exact>
          <Home/>
        </Route>
        <Route path="/about"  exact>
          <About/>
        </Route>
        <Route path="/skills"  exact>
          <Skills/>
        </Route>
        <Route path="/contact"  exact>
          <Contact/>
        </Route>
        <Route path="/signup"  exact>
          <Signup/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
