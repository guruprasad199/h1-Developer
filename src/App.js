import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import HeroSection from './components/HeroSection'
// import './components/HeroSection.css'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Service}/>
        <Route path="/Products" component={Products}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
