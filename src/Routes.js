//Dependencies
import React, { useState, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
//Navigation Components
import BottomNav from './components/BottomNav'
import NavBar from './components/NavBar'
//First level views
import Home from './views/main/Home'
import Tournaments from './views/main/Tournament'
import Shop from './views/main/Shop'
import Library from './views/main/Library'
//Second level views
import PostView from './views/secondary/PostView';
//Some Style
import './App.css';


const history = createBrowserHistory()


export default function Routes(){

    const[mainlevel, setMainlevel] = useState(true)

    useEffect(() => {
        history.push('/firstlvl/Home')
    }, [])

    history.listen((location, action) => {
        var route = location.pathname
        if (route.includes('/firstlvl/')){
            setMainlevel(true)
        }else{
            setMainlevel(false)
        }
    })

    const goBack = () => history.goBack()

    return(
        
            <Router history={history}>
                <NavBar showLogo={mainlevel} goBack={goBack}/>
                <Switch>
                    <Route path='/firstlvl/Home' component={Home}/>
                    <Route path='/firstlvl/Tournaments' component={Tournaments} />
                    <Route path='/firstlvl/Shop' component={Shop} />
                    <Route path='/firstlvl/Library' component={Library} />

                    <Route path='/secondlvl/post/:id' component={PostView}/>
                </Switch>
                {mainlevel ? <BottomNav /> : <div/>}
            </Router>
    );
}