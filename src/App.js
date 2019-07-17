//Dependencies
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
//Navigation components
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'
//Generals views
import Home from './views/main/Home'
import Tournament from './views/main/Tournament'
import Shop from './views/main/Shop'
import Library from './views/main/Library'
import ExpandedPost from './views/secondary/ExpandedPost'

const history = createBrowserHistory()


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showBottomNav: true
    }
  }
  
  hideBottomNav= () => {
    this.setState({
      showBottomNav: false
    })
  }

  showBottomNav = () => {
    this.setState({
      showBottomNav: true
    })
    history.goBack()
  }

  render() {

    return (
      <Router history={history}>
        <NavBar Handle={() => this.showBottomNav()}/>
        <Switch>
          <Route path='/' exact render={ props => <Home {...props} parentMethod={() => this.hideBottomNav()} /> } />
          <Route path='/wars' exact component={Tournament} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/library' exact component={Library} />
          <Route 
            path='/post/:id' 
            exact 
            component={ExpandedPost} 
            />
        </Switch>
        {this.state.showBottomNav ? <BottomNav /> : <div/>}
      </Router>
    );
  }
}

export default App;
