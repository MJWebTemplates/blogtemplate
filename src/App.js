import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import GlobaleStyle from './globaleStyles'
import Footer from './Components/Footer'

function App() {
  return (
   <Router>
    <GlobaleStyle />
     <Switch>
       <Route to='/' exact component={Home} />
     </Switch>
     <Footer />
   </Router>
  );
}

export default App;
