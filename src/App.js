import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {
  render(){
      return(
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
