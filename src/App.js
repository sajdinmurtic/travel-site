import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
    <Route exact path='/'> 
    <Main />
    <Cards />
    <Footer />
    </Route>
      <Route path='/home'> <Home /> </Route>
      <Route path='/about'> <About /> </Route>
      <Route path='/services'> <Services /> </Route>
      <Route path='/contact'> <Contact /> </Route>

         </Switch>
        
       </Router>
  );
}

export default App;
