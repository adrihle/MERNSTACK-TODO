//Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
//Navigation components
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'
//Generals views
import Home from './views/Home'
import Tournament from './views/Tournament'
import Shop from './views/Shop'
import Library from './views/Library'
import ExpandedPost from './components/ExpandedPost'

class App extends React.Component {

  render() {
    
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/wars' exact component={Tournament} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/library' exact component={Library} />
          <Route path='/:id' exact component={ExpandedPost} />
        </Switch>
        <BottomNav />
      </Router>
    );
  }
}

export default App;
