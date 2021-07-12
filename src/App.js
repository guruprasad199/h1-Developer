import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import HeroSection from './components/HeroSection'
// import './components/HeroSection.css'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact';
// import LocalClint from './components/LocalClint';
// import Delete from '.components/pages/Delete'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Service}/>
        <Route path="/Products" component={Products}/>
        <Route path="/signup" component={Contact}/>
        {/* <Route path="/delete" component={Delete}/> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
