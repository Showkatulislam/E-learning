import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/Home/Home'
import Services from './component/Services/Services'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
              <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
